import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reactionApi } from "./reactionApi";

export const updateReaction = createAsyncThunk(
  "video/updateReaction",
  async ({ id, info }) => {
    const data = await reactionApi(id, info);

    return data;
  }
);

export const reactionSlice = createSlice({
  name: "video",
  initialState: {
    loading: false,
    isError: false,
    error: "",
    video: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateReaction.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(updateReaction.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.video = action.payload;
      })
      .addCase(updateReaction.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
        state.video = {};
      });
  },
});

const reactionReducer = reactionSlice.reducer;

export default reactionReducer;
