const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const { fetchRelatedPost } = require("./relatedPost");

const fetchPost = createAsyncThunk(
  "post/fetchSinglePost",
  async (info, { dispatch }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${Math.ceil(
        Math.random() * 100
      )}`
    );

    const result = await response.json();

    const query = result.title
      .split(" ")
      .map((dt) => `title_like=${dt}`)
      .join("&");

    dispatch(fetchRelatedPost(query));

    return result;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    post: {},
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.error = "";
      state.loading = true;
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
      state.error = "";
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.post = {};
      state.error = action.error.message;
    });
  },
});

const postReducer = postSlice.reducer;

module.exports = { postReducer, fetchPost };
