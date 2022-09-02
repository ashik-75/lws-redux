const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const fetchRelatedPost = createAsyncThunk(
  "post/fetchRelatedPost",
  async (info) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?" + info
    );

    const result = await response.json();

    return result;
  }
);

const relatedPost = createSlice({
  name: "relatedPost",
  initialState: {
    loading: false,
    post: {},
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPost.pending, (state, action) => {
      state.error = "";
      state.loading = true;
    });

    builder.addCase(fetchRelatedPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
      state.error = "";
    });

    builder.addCase(fetchRelatedPost.rejected, (state, action) => {
      state.loading = false;
      state.post = {};
      state.error = action.error.message;
    });
  },
});

const relatedPostReducer = relatedPost.reducer;

module.exports = { relatedPostReducer, fetchRelatedPost };
