import { createSelector } from "reselect";

export const selectArticleReducer = (state) => state.articles;

export const selectArticleSlice = createSelector(
  [selectArticleReducer],
  (articlesSlice) => articlesSlice.articles
);

export const selectArticles = createSelector(
  [selectArticleSlice],
  (articles) => articles
);
