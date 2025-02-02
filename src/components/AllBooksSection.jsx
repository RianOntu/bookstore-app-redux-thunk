import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/thunk/getBooks";
import AllBooksSvgOne from "./SVGS/AllBooksSvgOne";
import AllBooksSvgTwo from "./SVGS/AllBooksSvgTwo";
import AllBooksSvgThree from "./SVGS/AllBooksSvgThree";
import AllBooksSvgFour from "./SVGS/AllBooksSvgFour";
import AllBooksSvgFive from "./SVGS/AllBooksSvgFive";
import bookDelete from "../redux/thunk/deleteBook";
import bookEdit from "../redux/thunk/editBook";
import { bookFilter } from "../redux/actionCreators";

function AllBooksSection() {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeBtn, setActiveBtn] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    dispatch(bookFilter(filter));
  };
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const all_books = useSelector((state) => state.books);
  const searchTerm = useSelector((state) => state.searchTerm);
  const filterTerm = useSelector((state) => state.filterTerm);

  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filteredBooks = all_books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilterBooks(filteredBooks);
    } else if (filterTerm) {
      const filteredBooks = all_books.filter(
        (book) => book.featured == filterTerm
      );

      setFilterBooks(filteredBooks);
    } else {
      setFilterBooks(all_books);
    }
  }, [all_books, searchTerm, filterTerm]);

  // Log the books for debugging
  console.log("All Books:", all_books);
  console.log("Filtered Books:", filterBooks);

  // Handlers for edit and delete actions
  const handleEdit = (book) => {
    dispatch(bookEdit(book));
  };
  const handleDelete = (bookId) => {
    dispatch(bookDelete(bookId));
  };
  const handleActiveBtn = (btnStatus) => {
    setActiveBtn(btnStatus);
  };

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${
              activeBtn == "All" ? "active-filter" : ""
            }`}
            id="lws-filterAll"
            onClick={() => {
              handleFilterClick(false);
              handleActiveBtn("All");
            }}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              activeBtn == "Featured" ? "active-filter" : ""
            }`}
            id="lws-filterFeatured"
            onClick={() => {
              handleFilterClick(true);
              handleActiveBtn("Featured");
            }}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="lws-bookContainer">
        {filterBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src={book.thumbnail}
              alt="book"
            />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
              <div className="flex items-center justify-between">
                {book.featured ? (
                  <span className="badge-success lws-Badge">featured</span>
                ) : (
                  <span className=""></span>
                )}
                <div className="text-gray-500 space-x-2">
                  <button
                    className="lws-edit"
                    onClick={() => handleEdit(book.id)}
                  >
                    <AllBooksSvgOne />
                  </button>
                  <button
                    className="lws-delete"
                    onClick={() => handleDelete(book.id)}
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
