import { updated } from "../actions";

export const updateTodo = (todoId, title) => async (dispatch) => {
  const response = await fetch(
    `https://limitless-waters-22656.herokuapp.com/api/todos/${todoId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const todo = await response.json();

  dispatch(updated(todo));
};
