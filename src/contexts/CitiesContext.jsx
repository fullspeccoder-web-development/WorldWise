import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const BASE_URL = "http://localhost:8000";

export const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "UPDATE_CITIES":
      return { ...state, isLoading: false, cities: action.payload };
    case "UPDATE_CITY":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "CITY_CREATED":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "CITY_DELETED":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        currentCity: {},
      };
    case "REJECTED":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error(action.type);
  }
};

export function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "LOADING" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "UPDATE_CITIES", payload: data });
      } catch {
        dispatch({
          type: "REJECTED",
          payload: "There was an error loading data...",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "LOADING" });
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "UPDATE_CITY", payload: data });
      } catch {
        dispatch({
          type: "REJECTED",
          payload: "There was an error loading the city...",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "CITY_CREATED", payload: data });
    } catch {
      dispatch({ type: "REJECTED", payload: "Error creating city..." });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "LOADING" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: "CITY_DELETED",
        payload: cities.filter((city) => city.id !== id),
      });
    } catch {
      dispatch({ type: "REJECTED", payload: "Error deleting city..." });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside cities provider.");
  return context;
}
