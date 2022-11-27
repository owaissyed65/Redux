import { combineReducers } from "redux";
import amountReducer from "./amount-Reducer";
import todo from "./todo";

const reducer = combineReducers({
    amount:amountReducer,
    todoList:todo
})
export default reducer;