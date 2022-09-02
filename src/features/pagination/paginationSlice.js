import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideosApi } from "../videos/videosApi";

export const fetchPagination = createAsyncThunk(
  "pagination/fetchPagination",
  async ({ author, search, tags }) => {
    const data = await fetchVideosApi(author, search, tags);

    return data;
  }
);

export const paginationSlice = createSlice({
  name: "videos",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    totalPage: null,
    currentPage: 1,
  },
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPagination.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchPagination.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.totalPage = action.payload?.length;
      })
      .addCase(fetchPagination.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.totalPage = null;
      });
  },
});

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;

export const { changePage } = paginationSlice.actions;
