import { LOADED } from "../actionTypes";

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books`);
      const books = await response.json();
      dispatch({
        type: LOADED,
        payload: books,
      });
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };
};
