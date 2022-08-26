import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import { updateTodo } from "../redux/todos/thunk/updateTodo";
export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { title, _id, completed, color } = todo;
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [toggle, setToggle] = useState(completed);

  const handleStatusChange = () => {
    dispatch(updateStatus(_id, toggle));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(updateColor(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleTodoUpdate = (e) => {
    if (e.keyCode === 13) {
      dispatch(updateTodo(_id, updateTitle));
      setSelectedTodo(null);
    }
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => {
            setToggle((prev) => !prev);
            handleStatusChange();
          }}
          className="opacity-0 absolute rounded-full"
        />
        {toggle && (
          <svg
            className="fill-current w-3 h-3 title-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {selectedTodo === _id ? (
          <input
            className="p-2 border-2 outline-none"
            onKeyDown={handleTodoUpdate}
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
          />
        ) : (
          title
        )}
      </div>

      <div
        onClick={() => setSelectedTodo(_id)}
        className={`flex-shrink-0 ml-auto cursor-pointer`}
      >
        {" "}
        <FiEdit />{" "}
      </div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(_id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(_id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(_id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(_id)}
      />
    </div>
  );
}
