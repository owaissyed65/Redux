import { combineReducers } from "redux";
import amountReducer from "./amount-Reducer";

const reducer = combineReducers({
    amount: amountReducer
})
export default reducer;