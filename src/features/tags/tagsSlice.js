import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagsApi } from "./tagsApi";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const data = await tagsApi();

  return data;
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    tags: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.tags = [];
      });
  },
});

const tagsReducer = tagsSlice.reducer;

export default tagsReducer;
