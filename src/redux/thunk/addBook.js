import { bookAdd } from "../actionCreators";

const bookAdded = (book) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books`, {
      method: "POST",
      body: book,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const bookResponse = await response.json();
    dispatch(bookAdd(bookResponse));
  };
};
export default bookAdded;
