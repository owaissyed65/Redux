import { combineReducers } from "redux";
import amountReducer from "./amount-Reducer";
import jsonFakeApi from "./jsonFakeApi";
import todo from "./todo";

const reducer = combineReducers({
    amount:amountReducer,
    todoList:todo,
    fakeApi:jsonFakeApi
})
export default reducer;