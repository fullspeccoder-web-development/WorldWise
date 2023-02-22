import { SEARCH_TYPES } from "./search.types";

const SEARCH_INITAL_STATE = {
  query: "",
};

export const searchReducer = (state = SEARCH_INITAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_TYPES.SET_QUERY:
      return {
        ...state,
        query: payload,
      };
    default:
      return state;
  }
};
