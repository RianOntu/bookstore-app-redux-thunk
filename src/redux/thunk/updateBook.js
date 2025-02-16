import { updateBook } from "../actionCreators";

const bookUpdate = (book) => {
  const selectedBook = JSON.parse(book);
  const bookId = selectedBook.id;

  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: book,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const bookResponse = await response.json();
    dispatch(updateBook(bookResponse));
  };
};
export default bookUpdate;
