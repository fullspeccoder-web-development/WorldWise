import { useEffect, useReducer } from "react";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const IMAGE_TYPES = {
  IMAGE_LOADING: "IMAGE_LOADING",
  IMAGE_SUCCESS: "IMAGE_SUCCESS",
  IMAGE_ERROR: "IMAGE_ERROR",
  UPDATE_QUERY: "UPDATE_QUERY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case IMAGE_TYPES.IMAGE_LOADING:
      return { ...state, isLoading: true };
    case IMAGE_TYPES.IMAGE_SUCCESS:
      return { ...state, images: action.payload, isLoading: false };
    case IMAGE_TYPES.IMAGE_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case IMAGE_TYPES.UPDATE_QUERY:
      return { ...state, query: action.payload };
    default:
      throw new Error("Unknown error occured.");
  }
};

export const useFetch = () => {
  const initialState = { error: "", images: [{}], isLoading: false, query: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { images, query, error, isLoading } = state;

  useEffect(() => {
    async function retrieveData() {
      dispatch({ type: IMAGE_TYPES.IMAGE_LOADING });
      try {
        const res = await fetch(
          `https://api.unsplash.com/${
            query === "" ? "" : "search"
          }/photos/?client_id=${ACCESS_KEY}${
            query === "" ? "" : `&query=${query}`
          }`
        );
        if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
        const data = await res.json();
        dispatch({
          type: IMAGE_TYPES.IMAGE_SUCCESS,
          payload: data?.results === undefined ? data : data?.results,
        });
      } catch (e) {
        dispatch({ type: IMAGE_TYPES.IMAGE_ERROR, payload: e });
      }
    }
    retrieveData();
  }, [query]);

  const updateQuery = (query) => {
    dispatch({ type: IMAGE_TYPES.UPDATE_QUERY, payload: query });
  };

  return { images, error, updateQuery, isLoading };
};
