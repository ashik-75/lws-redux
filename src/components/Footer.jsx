import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/search/actions";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const colors = useSelector((state) => state.search.colors);
  const dispatch = useDispatch();

  const handleStatus = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = (color) => {
    dispatch(colorChanged(color));
  };
  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {todos.length === 0
          ? "No task"
          : todos.length > 1
          ? todos.length + " tasks left"
          : "1 Task Left"}
      </p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatus("All")}
          class="cursor-pointer font-bold"
        >
          All
        </li>
        <li>|</li>
        <li onClick={() => handleStatus("Incomplete")} class="cursor-pointer">
          Incomplete
        </li>
        <li>|</li>
        <li onClick={() => handleStatus("Complete")} class="cursor-pointer">
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChanged("green")}
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChanged("red")}
          class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChanged("yellow")}
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
