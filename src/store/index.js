import { createStore } from "redux";
import combineReducer from "../reducers/index";

let store = createStore(combineReducer);

export default store;