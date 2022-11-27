import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import reducer from "./Reducer/index"
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)
const Store = createStore(reducer, enhancer);

export default Store


