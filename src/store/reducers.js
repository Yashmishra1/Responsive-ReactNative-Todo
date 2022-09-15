import { combineReducers } from "redux";
import todoReducer  from "./todos/reducer"

const appReducer = combineReducers({
  todo:todoReducer,
})

const rootReducer = (store,action) => {
  return appReducer(store, action);
}
export default rootReducer;