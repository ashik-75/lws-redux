import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tags: [],
    search: "",
    author: "",
  },
  reducers: {
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      const index = state.tags.indexOf(action.payload);

      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addAuthor: (state, action) => {
      state.author = action.payload;
    },
    resetFilter: (state, action) => {
      state.tags = [];
      state.search = "";
      state.author = "";
    },
  },
});

const filterReducer = filterSlice.reducer;

export default filterReducer;

export const { addTag, removeTag, addSearch, addAuthor, resetFilter } =
  filterSlice.actions;
