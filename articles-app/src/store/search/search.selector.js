import { createSelector } from "reselect";

export const selectSearchReducer = (state) => state.search;

export const selectSearchSlice = createSelector(
  [selectSearchReducer],
  (search) => search
);

export const selectSearchQuery = createSelector(
  [selectSearchSlice],
  (search) => search.query
);
