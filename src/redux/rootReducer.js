import { ADDED, LOADED } from "./actionTypes";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, action.payload];
    case LOADED:
      return [...action.payload];
    default:
      return state;
  }
};
export default rootReducer;
