import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./search/reucer";
import { todosReducer } from "./todos/reducer";

const reducer = combineReducers({
  search: searchReducer,
  todos: todosReducer,
});

export const store = createStore(reducer, composeWithDevTools());
