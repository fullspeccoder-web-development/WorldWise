import { combineReducers } from "redux";
import { articleReducer } from "./articles/articles.reducer";
import { searchReducer } from "./search/search.reducer";

export const rootReducer = combineReducers({
  articles: articleReducer,
  search: searchReducer,
});
