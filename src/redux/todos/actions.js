import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLORED_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  TOGGLED_TODO,
} from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
};

export const coloredTodo = (todoId, color) => {
  return {
    type: COLORED_TODO,
    payload: {
      todoId,
      color,
    },
  };
};

export const toggledTodo = (todoId) => {
  return {
    type: TOGGLED_TODO,
    payload: todoId,
  };
};

export const completeTodo = () => {
  return {
    type: COMPLETE_TODO,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
