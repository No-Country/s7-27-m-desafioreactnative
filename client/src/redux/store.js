import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
 // name: nameReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
