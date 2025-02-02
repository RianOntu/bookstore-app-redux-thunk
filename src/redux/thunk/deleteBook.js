

const bookDelete = (bookId) => {
  return async (dispatch) => {
     await fetch(`http://localhost:9000/books${bookId}`, {
      method: "DELETE",
    });
  
  };
};
export default bookDelete;
