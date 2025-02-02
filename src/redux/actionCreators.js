import { ADDED, DELETED, SELECTED, UPDATED } from "./actionTypes";

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
export const deleteBook = (bookToDelete) => {
  return {
    type: DELETED,
    payload: bookToDelete,
  };
};
