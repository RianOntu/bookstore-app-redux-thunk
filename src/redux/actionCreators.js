import {
  ADDED,
  DELETED,
  FILTER,
  SELECTED,
  SET_SEARCH_TERM,
  UPDATED,
} from "./actionTypes";

export const bookAdd = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};
export const selectBook = (bookToEdit) => {
  return {
    type: SELECTED,
    payload: bookToEdit,
  };
};
export const updateBook = (book) => {
  return {
    type: UPDATED,
    payload: book,
  };
};
export const deleteBook = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};
export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
export const bookFilter = (term) => ({
  type: FILTER,
  payload: term,
});
// In your Redux actions file
export const removeSelectedBook = () => ({
  type: "REMOVE_SELECTED_BOOK",
});
