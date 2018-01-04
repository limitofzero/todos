import { createStore } from "redux";
import todosReducer from "../reducers/todosReducer";

let store = createStore(todosReducer);

export default store;