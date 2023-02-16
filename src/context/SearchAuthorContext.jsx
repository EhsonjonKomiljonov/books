import { createContext, useState } from 'react';

export const SearchAuthorContext = createContext();

export const SearchAuthorProvider = ({ children }) => {
  const [author, setAuthor] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  return (
    <SearchAuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </SearchAuthorContext.Provider>
  );
};
