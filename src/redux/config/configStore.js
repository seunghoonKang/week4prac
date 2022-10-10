import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/Todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;

//리듀서가 1개라면 combineReducer를 쓸 필요가 없다.
//createStore에 바로 todos를 담으면 된다.
//다만 현재 이 파일을 기준으로 App.js에서 useSelector할 때 state.todos가 아닌, state 그 자체를 셀렉트 하면 된다.
