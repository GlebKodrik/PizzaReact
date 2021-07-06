export const SET_BASKET = "basket/SET_BASKET";
export const SET_PIZZA_COUNT = "basket/SET_PIZZA_COUNT";
export const DELETE_ITEM_BASKET = "basket/DELETE_ITEM_BASKET";
export const CLEAR_ALL = "basket/CLEAR_ALL";

const initialState = {
  items: [],
  totalPrice: 0,
  itemsCount: 0,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET: {
      const defaultValue = {
        itemsCount: state.itemsCount + action.quantity,
        totalPrice: state.totalPrice + action.payload.price * action.quantity,
      };

      const obj = state.items.find((el) => el.id === action.payload.id);
      if (!obj) {
        return {
          items: [...state.items, { ...action.payload, count: 1 }],
          ...defaultValue,
        };
      } else {
        return {
          items: state.items.map((el) => {
            if (action.payload.id === el.id) {
              return { ...el, count: el.count + action.quantity };
            } else return { ...el };
          }),
          ...defaultValue,
        };
      }
    }
    case CLEAR_ALL: {
      return {
        ...state,
        items: [],
        totalPrice: 0,
        itemsCount: 0,
      };
    }
    case SET_PIZZA_COUNT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, count: item.count + 1 };
          } else return { ...item };
        }),
      };
    }
    case DELETE_ITEM_BASKET: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        itemsCount: state.itemsCount - 1 * action.payload.count,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.count,
      };
    }
    default:
      return state;
  }
};
