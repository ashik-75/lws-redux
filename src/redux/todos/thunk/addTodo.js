import { added } from "../actions";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://limitless-waters-22656.herokuapp.com/api/todos",
      {
        method: "POST",
        body: JSON.stringify({
          title: todoText,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(added(todo));
  };
};

export default addTodo;
