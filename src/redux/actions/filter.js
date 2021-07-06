import { SET_CATEGORY, SET_SORT_BY } from "../reducers/filters";

export const setSortBy = (payload) => ({ type: SET_SORT_BY, payload });
export const setCategory = (payload) => ({ type: SET_CATEGORY, payload });
