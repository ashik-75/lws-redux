import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://limitless-waters-22656.herokuapp.com/api/todos/${todoId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          color,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(colorSelected(todo._id, todo.color));
  };
};

export default updateColor;
