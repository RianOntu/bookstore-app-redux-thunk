import { selectBook } from "../actionCreators";

const bookEdit = (bookId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books`);
    const bookResponse = await response.json();
    const book = bookResponse.find((book) => book.id == bookId);
    dispatch(selectBook(book));
  };
};
export default bookEdit;
