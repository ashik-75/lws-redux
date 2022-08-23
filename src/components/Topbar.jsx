import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../images/double-tick.png";
import notes from "../images/notes.png";
import plus from "../images/plus.png";
import { addTodo, clearCompleted, completeTodo } from "../redux/todos/actions";

const Topbar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const compeleteAlltask = () => {
    dispatch(completeTodo());
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (value.length > 0) {
      dispatch(
        addTodo({
          title: value,
          completed: true,
        })
      );

      setValue("");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleAddTodo}
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} class="w-6 h-6" alt="Add todo" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer">
          <img class="w-4 h-4" src={doubleTick} alt="Complete" />
          <span onClick={compeleteAlltask}>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleted} class="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
