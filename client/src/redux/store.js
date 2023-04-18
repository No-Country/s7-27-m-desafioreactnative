import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { petReducer } from "./reducers/petReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pet: petReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
