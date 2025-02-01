import { ADDED } from "./actionTypes";

export const bookAdd = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};

