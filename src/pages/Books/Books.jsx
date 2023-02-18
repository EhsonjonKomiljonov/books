import React, { useContext, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { Courusel } from '../../components/Slider/Carousel';
import { api } from '../../API/api';
import { SearchBooksContext } from '../../context/SearchBooksContext';
import { BookCard } from '../../components/BookCard/BookCard';
import { ActivePageContext } from '../../context/ActivePageContext';
import { BooksSort } from '../../components/BooksSort/BooksSort';

export const Books = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const { books, setBooks } = useContext(SearchBooksContext);

  useEffect(() => {
    setActivePage(false);
  }, []);

  return (
    <>
      <Header />
      <Courusel />
      <Search
        activePage={activePage}
        get={api.getBook}
        Card={<BookCard />}
        set={setBooks}
        search={books}
      />
      <BooksSort />
    </>
  );
};
