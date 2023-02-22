import { createAction } from "../../utilities/reducer";
import { SEARCH_TYPES } from "./search.types";

export const setQuery = (query) => createAction(SEARCH_TYPES.SET_QUERY, query);
