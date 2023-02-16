import React, { useContext, useEffect } from 'react';
import { Search } from '../../components/Search/Search';
import { Courusel } from '../../components/Slider/Carousel';
import { Header } from '../../components/Header/Header';
import { api } from '../../API/api';
import { SearchAuthorContext } from '../../context/SearchAuthorContext';
import { AuthorCard } from '../../components/AuthorCard/AuthorCard';
import { ActivePageContext } from '../../context/ActivePageContext';
import { AuthorSort } from '../../components/AuthorSort/AuthorSort';

export const Home = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const { author, setAuthor } = useContext(SearchAuthorContext);
  useEffect(() => {
    setActivePage(true);
  }, []);
  return (
    <>
      <Header />
      <Courusel />
      <Search
        activePage={activePage}
        set={setAuthor}
        get={api.getAuthorSearch}
        Card={<AuthorCard />}
        search={author}
      />
      <AuthorSort />
    </>
  );
};
