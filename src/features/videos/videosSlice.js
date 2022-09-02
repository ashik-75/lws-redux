import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideosApi } from "./videosApi";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ author, search, tags, currentPage }) => {
    const data = await fetchVideosApi(author, search, tags, currentPage);

    return data;
  }
);

export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    videos: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.videos = [];
      });
  },
});

const videosReducer = videosSlice.reducer;

export default videosReducer;
