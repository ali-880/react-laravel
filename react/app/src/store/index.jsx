import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CombineReducer } from "../reducers";
export const store=createStore(CombineReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))