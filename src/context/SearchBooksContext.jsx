import { createContext, useState } from 'react';

export const SearchBooksContext = createContext();

export const SearchBooksProvider = ({ children }) => {
  const [books, setBooks] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  return (
    <SearchBooksContext.Provider value={{ books, setBooks }}>
      {children}
    </SearchBooksContext.Provider>
  );
};
