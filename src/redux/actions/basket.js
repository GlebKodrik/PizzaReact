import {
  CLEAR_ALL,
  DELETE_ITEM_BASKET,
  SET_BASKET,
  SET_PIZZA_COUNT,
} from "../reducers/basket";

export const setBasketItem = (payload, quantity = 1) => ({
  type: SET_BASKET,
  payload,
  quantity,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const setPizzaCount = (payload) => ({
  type: SET_PIZZA_COUNT,
  payload,
});
export const deleteItemBasket = (payload) => ({
  type: DELETE_ITEM_BASKET,
  payload,
});
