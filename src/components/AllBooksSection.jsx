import React, { useEffect } from "react";
import AllBooksSvgOne from "./SVGS/AllBooksSvgOne";
import AllBooksSvgTwo from "./SVGS/AllBooksSvgTwo";
import AllBooksSvgThree from "./SVGS/AllBooksSvgThree";
import AllBooksSvgFour from "./SVGS/AllBooksSvgFour";
import AllBooksSvgFive from "./SVGS/AllBooksSvgFive";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/thunk/getBooks";
import { deleteBook, selectBook } from "../redux/actionCreators";

function AllBooksSection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const all_books = useSelector((state) => state);
  console.log("allbooks", all_books);
  const handleEdit = (book) => {
    dispatch(selectBook(book));
  };
  const handleDelete = (book) => {
    dispatch(deleteBook(book));
  };

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>

      <div className="lws-bookContainer">
        {all_books.map((book) => (
          <div key={book.id} className="book-card">
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src={book.thumbnail}
              alt="book"
            />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="badge-success lws-Badge">featured</span>
                <div className="text-gray-500 space-x-2">
                  <button className="lws-edit" onClick={() => handleEdit(book)}>
                    <AllBooksSvgOne />
                  </button>
                  <button
                    className="lws-delete"
                    onClick={() => handleDelete(book)}
                  >
                    <AllBooksSvgTwo />
                  </button>
                </div>
              </div>

              <div className="space-y-2 mt-4 h-full">
                <h4 className="lws-bookName">{book.name}</h4>
                <p className="lws-author">{book.author}</p>
                <div className="lws-stars">
                  <AllBooksSvgThree />
                  <AllBooksSvgFour />
                  <AllBooksSvgFive />
                </div>
                <p className="lws-price">{book.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooksSection;
