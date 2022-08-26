import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://limitless-waters-22656.herokuapp.com/api/todos/${todoId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(toggled(todo._id));
  };
};

export default updateStatus;
