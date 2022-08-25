import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { filterReducer } from "./filters/reducer";
import { postsReducer } from "./posts/reducer";
import { searchReducer } from "./search/reucer";
import { todosReducer } from "./todos/reducer";

const reducer = combineReducers({
  search: searchReducer,
  todos: todosReducer,
  posts: postsReducer,
  filter: filterReducer,
});

export const store = createStore(reducer, composeWithDevTools());
