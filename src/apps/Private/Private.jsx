import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AddAuthor } from '../../pages/AddAuthor/AddAuthor';
import { AddBook } from '../../pages/AddBook/AddBook';
import { Home } from '../../pages/Home/Home';
import { Books } from '../../pages/Books/Books';
import { Temuriylar } from '../../components/Temuriylar/Temuriylar';
import { Jadidlar } from '../../components/Jadidlar/Jadidlar';
import { Sovet } from '../../components/Sovet/Sovet';
import { Mustaqillik } from '../../components/Mustaqillik/Mustaqillik';
import { AuthorSinglePage } from '../../components/AuthorSinglePage/AuthorSinglePage';

export const Private = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home/*" element={<Home />}>
          <Route index element={<Navigate to="temuriylar" />} />
          <Route path="temuriylar" element={<Temuriylar />} />
          <Route path="jadidlar" element={<Jadidlar />} />
          <Route path="sovet" element={<Sovet />} />
          <Route path="mustaqillik" element={<Mustaqillik />} />
        </Route>
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors/:id" element={<AuthorSinglePage />} />
      </Routes>
    </>
  );
};
