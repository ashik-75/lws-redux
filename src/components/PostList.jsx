import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const filter = useSelector((state) => state.filter);

  const { author, category, query } = filter;

  return (
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts
        .filter((todo) => {
          if (query.length > 0) {
            return todo.title.toLowerCase().includes(query);
          }

          return true;
        })
        .filter((todo) => {
          if (category === "All") {
            return true;
          } else {
            return todo.category === category;
          }
        })
        .filter((todo) => {
          if (author === "All") {
            return true;
          } else {
            return todo.author?.name === author;
          }
        })
        .map((post) => (
          <Post post={post} />
        ))}
    </div>
  );
};

export default PostList;
