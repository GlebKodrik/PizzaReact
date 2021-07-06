export const SET_PIZZA = "pizza/SET_PIZZA";
export const SET_LOADING = "pizza/SET_LOADING";
const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA: {
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }
    default:
      return state;
  }
};
