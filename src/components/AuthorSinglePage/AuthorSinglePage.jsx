import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../API/api';
import { NavLink, useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { BookCard } from '../BookCard/BookCard';
import { AuthorBooks } from './author-single-page.styles';
import loadingIcon from '../../assets/images/loading-icon.svg';
import loadingIconDark from '../../assets/images/loading-icon-dark.svg';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';

export const AuthorSinglePage = () => {
  const { id } = useParams();
  const { lang: language, setLang } = useContext(LocalizationContext);
  const theme = useSelector((state) => state.theme.theme);

  const [getAuthor, setGetAuthor] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  const [getAuthorBooks, setGetAuthorBooks] = useState({
    isLoading: false,
    data: [],
    isError: '',
  });

  const token = useSelector((state) => state.token.token);

  const getBooksAuthor = async () => {
    setGetAuthorBooks({
      isLoading: true,
      isError: '',
      data: [],
    });

    const data = await api.getAuthorBooks(id, token).catch((err) =>
      setGetAuthorBooks({
        isLoading: false,
        isError: err.message,
        data: [],
      })
    );

    if (data.status === 201) {
      setGetAuthorBooks({
        isLoading: false,
        isError: '',
        data: data.data,
      });
      console.log(data);
    }
  };

  const getAuthors = async () => {
    setGetAuthor({ isLoading: true, isError: '', data: [] });
    const data = await api
      .getAuthor(id, token)
      .catch((err) =>
        setGetAuthor({ isLoading: false, isError: err.message, data: [] })
      );
    if (data.status === 201) {
      setGetAuthor({ isLoading: false, isError: '', data: data.data });
    }
  };

  useEffect(() => {
    getAuthors();
    getBooksAuthor();
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="container">
          {getAuthor.isError ? (
            <h2 className="text-center mt-24 text-5xl  text-red-700">
              {getAuthor.isError}
            </h2>
          ) : (
            ''
          )}

          {getAuthor.isLoading ? (
            theme ? (
              <img
                style={{
                  position: 'absolute',
                  top: '160px',
                  right: '0',
                  bottom: '0',
                  left: '670px',
                  width: '400px',
                  height: '400px',
                }}
                src={loadingIconDark}
                alt="Loading..."
              />
            ) : (
              <img
                style={{
                  position: 'absolute',
                  top: '160px',
                  right: '0',
                  bottom: '0',
                  left: '670px',
                  width: '400px',
                  height: '400px',
                }}
                src={loadingIcon}
                alt="Loading..."
              />
            )
          ) : (
            ''
          )}

          {getAuthor.data ? (
            <div className="flex items-start">
              <img
                style={{ width: '505px', height: '681px', borderRadius: '20px' }}
                src={`http://localhost:5000/${getAuthor.data.image}`}
                alt={getAuthor.data.first_name + ' ' + getAuthor.data.last_name}
              />
              <div className="ml-40">
                <h2 className="text-profileLink text-5xl mb-2">
                  {getAuthor.data.first_name + ' ' + getAuthor.data.last_name}
                </h2>
                <p className="text-colorSort dark:text-white dark:opacity-60">
                  {getAuthor.data.bio}
                </p>
                <div className="flex items-center mt-11">
                  <div>
                    <p className="text-colorSort dark:text-white dark:opacity-60 text-xs">
                      {lang[language].AuthorSinglePage.AuthorDateOfBirth}
                    </p>
                    <ins className="text-4xl text-profileLink no-underline">
                      {getAuthor.data.date_of_birth}
                    </ins>
                    <p className="text-colorSort dark:text-white dark:opacity-60 text-xs">
                      {getAuthor.data.country}
                    </p>
                  </div>
                  <p className="mx-4 text-profileLink text-4xl">-</p>
                  <div>
                    <p className="text-colorSort dark:text-white dark:opacity-60 text-xs">
                      {lang[language].AuthorSinglePage.AuthorDateOfDeath}
                    </p>
                    <ins className="text-4xl text-profileLink no-underline">
                      {getAuthor.data.date_of_death}
                    </ins>
                    <p className="text-colorSort dark:text-white dark:opacity-60 text-xs">
                      {getAuthor.data.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {getAuthorBooks.isLoading ? (
            <h2 className="text-center text-5xl mt-24 text-profileLink font-poppins">
              Loading...
            </h2>
          ) : (
            ''
          )}

          {getAuthorBooks.isError ? (
            <h2 className="text-center mt-24 text-5xl text-profileLink font-poppins">
              {getAuthorBooks.isError}!
            </h2>
          ) : (
            ''
          )}

          <section className="mt-24  pb-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-profileLink text-3xl">
                {lang[language].AuthorBooks}
              </h2>
              <NavLink className="text-black dark:text-white" to="/books">
                {lang[language].ViewAll}
              </NavLink>
            </div>
            <AuthorBooks className="overflow-auto w-full">
              {getAuthorBooks.data ? (
                <ul
                  style={{
                    width: '100%',
                    maxWidth: '200000px',
                    display: '-webkit-box',
                  }}
                  className="items-center justify-between flex-nowrap flex-row"
                >
                  {getAuthorBooks.data.map((item) => (
                    <li className="mr-5 w-52">
                      <BookCard
                        obj={item}
                        bookAuthorLastName={getAuthor.data.last_name}
                        bookAuthorFirstName={getAuthor.data.first_name}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </AuthorBooks>
          </section>
        </div>
      </section>
    </>
  );
};
