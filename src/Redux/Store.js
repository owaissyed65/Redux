import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducer from "./Reducer/index"

const Store = createStore(reducer,{},applyMiddleware(thunk))

export default Store


