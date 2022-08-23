import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const searchInfo = useSelector((state) => state.search);

  const { status, colors } = searchInfo;

  const statusFilter = (todo) => {
    if (status === "Complete") {
      return todo?.completed;
    } else if (status === "Incomplete") {
      return !todo?.completed;
    } else {
      return true;
    }
  };

  const colorsFilter = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo.color);
    }

    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(statusFilter)
        .filter(colorsFilter)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
