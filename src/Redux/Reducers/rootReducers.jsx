import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import basketReducer from "./basketReducer";
export const RootReducer = combineReducers({
  Fetch: fetchReducer,
  Basket: basketReducer,
});
