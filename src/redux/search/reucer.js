import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";
import { initialSearchState } from "./initialState";

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case COLOR_CHANGED:
      return {
        ...state,
        colors: state.colors.includes(action.payload)
          ? state.colors.filter((dt) => dt !== action.payload)
          : [...state.colors, action.payload],
      };
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
