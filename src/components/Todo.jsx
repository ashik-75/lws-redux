import React from "react";
import { useDispatch } from "react-redux";
import cancel from "../images/cancel.png";
import { coloredTodo, removeTodo, toggledTodo } from "../redux/todos/actions";

const Todo = ({ todo }) => {
  const { id, title, completed, color } = todo;
  const dispatch = useDispatch();

  const handleColor = (todoId, color) => {
    dispatch(coloredTodo(todoId, color));
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleToggled = (todoId) => {
    dispatch(toggledTodo(todoId));
  };
  return (
    <div class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div class="rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleToggled(id)}
          class="opacity-0 absolute rounded-full"
        />
        <svg
          class={`${
            !completed && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div class={`select-none flex-1 ${completed && "line-through"}`}>
        {title}
      </div>

      <div
        onClick={() => handleColor(id, "green")}
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        } `}
      ></div>

      <div
        onClick={() => handleColor(id, "yellow")}
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        } `}
      ></div>

      <div
        onClick={() => handleColor(id, "red")}
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        } `}
      ></div>

      <img
        onClick={() => handleRemove(id)}
        src={cancel}
        class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
