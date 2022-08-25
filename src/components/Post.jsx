import React from "react";
import { useDispatch } from "react-redux";
import { authorChanged, categoryChanged } from "../redux/filters/actions";

const Post = ({ post }) => {
  const { image, category, title, author } = post;

  const dispatch = useDispatch();

  const handleCategoryFilter = (category) => {
    console.log({ category });
    dispatch(categoryChanged(category));
  };

  const handleAuthorFilter = (author) => {
    dispatch(authorChanged(author));
  };

  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src={image} alt="" />
      </div>

      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <span
              onClick={() => handleCategoryFilter(category)}
              class="inline-flex items-center cursor-pointer px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {category}
            </span>
          </p>
          <a href="#" class="block mt-1">
            <p class="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img
              onClick={() => handleAuthorFilter(author?.name)}
              class="h-10 w-10 rounded-full cursor-pointer"
              src={author?.url}
              alt=""
            />
          </div>
          <div class="ml-3">
            <p
              onClick={() => handleAuthorFilter(author?.name)}
              class="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
            >
              {author.name}
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">11 Jul, 2022</time>
              <span aria-hidden="true">&middot;</span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
