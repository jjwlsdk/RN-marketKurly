import { combineReducers } from "redux";
import productReducer from "./Product/reducer.js";
import prodDataReducer from "./ProductDetail/reducer";

export default combineReducers({
  productReducer,
  prodDataReducer,
});
