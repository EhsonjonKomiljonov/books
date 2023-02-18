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
import { TemuriylarBooks } from '../../components/TemuriylarBook/TemuriylarBook';
import { JadidlarBooks } from '../../components/JadidlarBooks/JadidlarBooks';
import { SovetBooks } from '../../components/SovetBooks/SovetBooks';
import { MustaqillikBooks } from '../../components/MustaqillikBooks/MustaqillikBooks';
import { BookSinglePage } from '../../components/BookSinglePage/BookSinglePage';
import { Profile } from '../../pages/Profile/Profile';
import { ProfileEdit } from '../../components/ProfileEdit/ProfileEdit';
import { ProfileSecurity } from '../../components/ProfileSecurity/ProfileSecurity';
import { Settings } from '../../components/Settings/Settings';
import { Error } from '../../pages/Error/Error';

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
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="books/*" element={<Books />}>
          <Route index element={<Navigate to="temuriylar-books" />} />
          <Route path="temuriylar-books" element={<TemuriylarBooks />} />
          <Route path="jadidlar-books" element={<JadidlarBooks />} />
          <Route path="sovet-books" element={<SovetBooks />} />
          <Route path="mustaqillik-books" element={<MustaqillikBooks />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/authors/:id" element={<AuthorSinglePage />} />
        <Route path="/books/:id" element={<BookSinglePage />} />
        <Route path="profile/*" element={<Profile />}>
          <Route index element={<Navigate to="profile-edit" />} />
          <Route path="profile-edit" element={<ProfileEdit />} />
          <Route path="profile-security" element={<ProfileSecurity />} />
          <Route path="profile-settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
