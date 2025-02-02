import { ADDED, SELECTED, LOADED, UPDATED, DELETED } from "./actionTypes";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, action.payload];
    case LOADED:
      return [...action.payload];
    case SELECTED:
      return state.map((book) =>
        book.id == action.payload.id
          ? { ...book, isSelected: true, editMode: true }
          : { ...book, isSelected: false, editMode: false }
      );
    case UPDATED:
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...action.payload, isSelected: false }
          : book
      );
    case DELETED:
      return state.filter((book) => book.id != action.payload.id);
    default:
      return state;
  }
};
export default rootReducer;
