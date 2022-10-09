import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/Todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
