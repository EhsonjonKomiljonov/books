import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { api } from '../../API/api';
import { AuthorBooks } from '../AuthorSinglePage/author-single-page.styles';
import { BookCard } from '../BookCard/BookCard';
import { Header } from '../Header/Header';
import { ArrowDownStyle } from './book-single-page.styles';
import loadingIcon from '../../assets/images/loading-icon.svg';
import loadingIconDark from '../../assets/images/loading-icon-dark.svg';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';

export const BookSinglePage = () => {
  const { id } = useParams();
  const [getAuthorId, setGetAuthorId] = useState(0);
  const { lang: language, setLang } = useContext(LocalizationContext);
  const token = useSelector((state) => state.token.token);
  const theme = useSelector((state) => state.theme.theme);

  const [getBook, setGetBook] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

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

  const getBookInfo = async () => {
    setGetBook({ isLoading: true, isError: '', data: [] });

    const data = await api
      .getBookInfo(id, token)
      .catch((err) =>
        setGetBook({ isLoading: false, isError: err.message, data: [] })
      );
    if (data.status === 201) {
      setGetBook({
        isLoading: false,
        data: data.data,
        isError: '',
      });
      setGetAuthorId(data.data.author_id);
    }
  };

  const getBooksAuthor = async () => {
    setGetAuthorBooks({
      isLoading: true,
      isError: '',
      data: [],
    });

    const data = await api.getAuthorBooks(getAuthorId, token).catch((err) =>
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
    }
  };

  useEffect(() => {
    getBookInfo();
  }, []);
  useEffect(() => {
    getBooksAuthor();
  }, [getAuthorId]);

  return (
    <>
      <Header />
      <section>
        <div className="container">
          {getBook.isLoading ? (
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

          {getBook.isError ? (
            <h2 className="text-center mt-24 text-5xl text-profileLink font-poppins">
              {getBook.isError}!
            </h2>
          ) : (
            ''
          )}

          {getBook.data ? (
            <div className="flex items-center mb-24">
              <img
                style={{
                  width: '505px',
                  height: '681px',
                  borderRadius: '21px',
                }}
                src={'http://localhost:5000/' + getBook.data.image}
                alt=""
              />
              <div style={{ width: '671px' }} className="ml-16">
                <h2 className="text-5xl font-poppins text-black dark:text-profileLink">
                  {getBook.data.title}
                </h2>
                <div className="flex items-center justify-between mt-3 mb-4">
                  <p
                    className={`text-colorSort dark:text-white ${
                      lang.ru ? 'font-normal' : 'font-poppins'
                    } dark:opacity-60`}
                  >
                    {lang[language].BookSinglePage.NumberOfPages}
                  </p>
                  <p className="font-poppins dark:text-white">
                    {getBook.data.page} page
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3 mb-4">
                  <p
                    className={`text-colorSort dark:text-white ${
                      lang.ru ? 'font-normal' : 'font-poppins'
                    } dark:opacity-60`}
                  >
                    {lang[language].BookSinglePage.Published}
                  </p>
                  <p className="font-poppins dark:text-white">
                    {getBook.data.year} years
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3 mb-4">
                  <p
                    className={`text-colorSort dark:text-white ${
                      lang.ru ? 'font-normal' : 'font-poppins'
                    } dark:opacity-60`}
                  >
                    {lang[language].BookSinglePage.BookPrice}
                  </p>
                  <p className="font-poppins dark:text-white">
                    ${getBook.data.price}
                  </p>
                </div>
                <div className="relative flex items-center mt-10">
                  <ArrowDownStyle className="text-profileLink">
                    {lang[language].BookSinglePage.FullInformation}
                  </ArrowDownStyle>
                  <span
                    style={{ width: '510px' }}
                    className="absolute right-0 block bg-profileLink h-px"
                  ></span>
                </div>
                <div className="mt-3">
                  <p className="text-colorSort dark:text-white dark:opacity-60">
                    {getBook.data.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {getAuthorBooks.isLoading ? (
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

          {getAuthorBooks.isError ? (
            <h2 className="text-center mt-24 text-5xl text-red-700 font-poppins">
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
                      <BookCard obj={item} />
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
