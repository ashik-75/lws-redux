import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { addSearch } from "../../features/filter/filterSlice";
import { changePage } from "../../features/pagination/paginationSlice";

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearch(value));
    dispatch(changePage(1));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
