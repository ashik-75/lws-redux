const { fetchPost } = require("./redux/features/post/postSlice");
const { fetchRelatedPost } = require("./redux/features/post/relatedPost");
const store = require("./redux/store");

console.log("Index call");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchPost());
