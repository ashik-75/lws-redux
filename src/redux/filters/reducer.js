import { AUTHOR_CHANGED, CATEGORY_CHANGED, QUERY_CHANGED } from "./actionTypes";
import { initialFilterState } from "./initialState";

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case CATEGORY_CHANGED:
      return {
        ...state,
        category: action.payload,
      };

    case AUTHOR_CHANGED:
      return {
        ...state,
        author: action.payload,
      };

    case QUERY_CHANGED:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};
