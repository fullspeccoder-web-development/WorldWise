import { ARTICLE_TYPES } from "./articles.types";
import { createAction } from "../../utilities/reducer";

export const setArticles = (articles) =>
  createAction(ARTICLE_TYPES.SET_ARTICLES, articles);
