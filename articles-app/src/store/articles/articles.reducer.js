import { ARTICLE_TYPES } from "./articles.types";

const ARTICLE_INTIAL_STATE = {
  articles: [],
};

export const articleReducer = (state = ARTICLE_INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ARTICLE_TYPES.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    default:
      return state;
  }
};
