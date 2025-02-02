import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookAdded from "../redux/thunk/addBook";
import bookUpdate from "../redux/thunk/updateBook";

function AddNewBookForm() {
  const books = useSelector((state) => state?.books);
  const selectedBook = books?.find((book) => book?.isSelected);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  useEffect(() => {
    if (selectedBook) {
      setEditMode(true); // Enable editMode if a book is selected
      setFormData({
        id: selectedBook.id,
        name: selectedBook.name,
        thumbnail: selectedBook.thumbnail,
        author: selectedBook.author,
        price: selectedBook.price,
        rating: selectedBook.rating,
        featured: selectedBook.featured,
      });
    } else {
      setEditMode(false); // Reset editMode when no book is selected
      setFormData({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      }); // Clear formData for new book
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      // Update the selected book
      dispatch(bookUpdate(JSON.stringify(formData)));

      // Optionally, dispatch a reset action here to remove the 'isSelected' flag
      dispatch({ type: "REMOVE_SELECTED_BOOK" }); // This action will reset the selected book in Redux

      setEditMode(false); // Exit edit mode

      // Reset the form data after update
      setFormData({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      });
    } else {
      // Add new book
      dispatch(bookAdded(JSON.stringify(formData)));

      // Reset the form after submission
      setFormData({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      });
    }
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {editMode ? "Edit Book" : "Add New Book"}
      </h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="author">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              value={formData.rating}
              min="1"
              max="5"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={formData.featured}
            onChange={handleChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {editMode ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
}

export default AddNewBookForm;
