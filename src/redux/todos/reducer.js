import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLORED_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  TOGGLED_TODO,
} from "./actionTypes";
import { todosInitialState } from "./initialState";

const generateId = (todos) => {
  const maxId = todos.reduce((prev, curr) => Math.max(curr.id, prev), 0);
  return maxId + 1;
};

export const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: generateId(state),
          ...action.payload,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case COLORED_TODO:
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, color: action.payload.color }
          : { ...todo }
      );
    case TOGGLED_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );

    case COMPLETE_TODO:
      return state.map((todo) => (todo.completed = true));
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
