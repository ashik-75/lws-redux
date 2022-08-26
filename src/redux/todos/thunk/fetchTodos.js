import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const response = await fetch(
    "https://limitless-waters-22656.herokuapp.com/api/todos"
  );
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
