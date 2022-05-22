import { combineReducers, createStore } from "redux";
import { newsReducer } from "../reducers/news";
import { usersReducer } from "../reducers/users";

const combine = combineReducers({usersReducer, newsReducer})

export const store = createStore(combine)