import {
  ADDED,
  DELETED,
  FILTER,
  LOADED,
  REMOVE_SELECTED_BOOK,
  SELECTED,
  SET_SEARCH_TERM,
  UPDATED,
} from "./actionTypes";

const initialState = {
  books: [], // Array to store the list of books
  searchTerm: "", // String to store the search term
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return {
        ...state, // Spread the existing state
        books: [...state.books, action.payload], // Add the new book
      };
    case LOADED:
      return {
        ...state, // Spread the existing state
        books: [...action.payload], // Set books to the payload (the fetched books)
      };
    case SELECTED:
      return {
        ...state, // Spread the existing state
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, isSelected: true, editMode: true }
            : { ...book, isSelected: false, editMode: false }
        ),
      };
    case UPDATED:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
      };
    case FILTER:
      return {
        ...state,
        filterTerm: action.payload,
      };

    case DELETED:
      return {
        ...state, // Spread the existing state
        books: state.books.filter((book) => book.id !== action.payload), // Remove the deleted book
      };
    case SET_SEARCH_TERM:
      return {
        ...state, // Spread the existing state
        searchTerm: action.payload, // Set the new search term
      };
    case REMOVE_SELECTED_BOOK:
      return {
        ...state,
        books: state.books.map((book) => ({
          ...book,
          isSelected: false, // Reset 'isSelected' for all books
        })),
      };
    default:
      return state; // Return the unchanged state by default
  }
};

export default rootReducer;
