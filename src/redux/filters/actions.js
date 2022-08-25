import { AUTHOR_CHANGED, CATEGORY_CHANGED, QUERY_CHANGED } from "./actionTypes";

export const categoryChanged = (category) => {
  return {
    type: CATEGORY_CHANGED,
    payload: category,
  };
};

export const authorChanged = (author) => {
  return {
    type: AUTHOR_CHANGED,
    payload: author,
  };
};

export const queryChanged = (query) => {
  return {
    type: QUERY_CHANGED,
    payload: query,
  };
};
