export const SET_SORT_BY = "filter/SET_SORT_BY";
export const SET_CATEGORY = "filter/SET_CATEGORY";

const initialState = {
  sortBy: {
    type: "popular",
    order: "desc",
  },
  category: null,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    default:
      return state;
  }
};
