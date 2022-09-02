import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideoApi, reactionApi } from "./videoApi";

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const data = await fetchVideoApi(id);

  return data;
});

export const updateReaction = createAsyncThunk(
  "video/updateReaction",
  async ({ id, info }) => {
    const data = await reactionApi(id, info);

    return data;
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    video: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.video = {};
      })
      .addCase(updateReaction.fulfilled, (state, action) => {
        state.video = action.payload;
      });
  },
});

const videoReducer = videoSlice.reducer;

export default videoReducer;
