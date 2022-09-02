const { configureStore } = require("@reduxjs/toolkit");
const { postReducer } = require("./features/post/postSlice");
const { relatedPostReducer } = require("./features/post/relatedPost");

const store = configureStore({
  reducer: {
    post: postReducer,
    relatedPost: relatedPostReducer,
  },
});

module.exports = store;
