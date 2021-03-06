import { SET_LOADING, SET_PIZZA } from "../reducers/pizzas";
import axios from "axios";

export const setLoaded = (payload) => ({ type: SET_LOADING, payload });

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};
export const setPizzas = (payload) => ({ type: SET_PIZZA, payload });
