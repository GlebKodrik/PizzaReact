import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { pizzasReducer } from "./reducers/pizzas";
import { filtersReducer } from "./reducers/filters";
import thunkMiddleware from "redux-thunk";
import { basketReducer } from "./reducers/basket";

let reducer = combineReducers({
  pizza: pizzasReducer,
  filter: filtersReducer,
  basket: basketReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
