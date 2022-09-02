import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { relatedVideosApi } from "./relatedVideosApi";

export const fetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const data = await relatedVideosApi(tags, id);

    return data;
  }
);

export const relatedVideosSlice = createSlice({
  name: "videos",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    videos: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.videos = [];
      });
  },
});

const relatedVideosReducer = relatedVideosSlice.reducer;

export default relatedVideosReducer;
