import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import search from "../assets/search.svg";
import { queryChanged } from "../redux/filters/actions";

const useDebounce = (input, time) => {
  const [output, setOutput] = useState("");

  console.log({ input });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOutput(input);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [input, time]);

  return output;
};

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const output = useDebounce(value, 1000);

  useEffect(() => {
    dispatch(queryChanged(output));
  }, [output]);

  return (
    <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        class="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        placeholder="Search"
      />
      <img class="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  );
};

export default Search;
