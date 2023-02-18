import React, { useContext, useRef, useState } from 'react';
import { AuthorCard } from '../AuthorCard/AuthorCard';
import { BookCard } from '../BookCard/BookCard';
import { SearchBox, SearchBtn } from './search.styles';
import { lang } from '../../lang/lang';
import { LocalizationContext } from '../../context/LocalizationContext';

export const Search = ({ get, set, search, activePage }) => {
  const inputRef = useRef();

  const { lang: language } = useContext(LocalizationContext);

  const getData = async (val) => {
    if (
      inputRef.current?.value != '' &&
      inputRef.current?.value != ' ' &&
      inputRef.current?.value != '  ' &&
      inputRef.current?.value != '   ' &&
      inputRef.current?.value != '    ' &&
      inputRef.current?.value != '     ' &&
      inputRef.current?.value != '      ' &&
      inputRef.current?.value != '       ' &&
      inputRef.current?.value != '        ' &&
      inputRef.current?.value != '         ' &&
      inputRef.current?.value != '          ' &&
      inputRef.current?.value != '           ' &&
      inputRef.current?.value != '            ' &&
      inputRef.current?.value != '             ' &&
      inputRef.current?.value != '              ' &&
      inputRef.current?.value != '               ' &&
      inputRef.current?.value != '                ' &&
      inputRef.current?.value != '                 ' &&
      inputRef.current?.value != '                  ' &&
      inputRef.current?.value != '                   ' &&
      inputRef.current?.value != '                    ' &&
      inputRef.current?.value != '                     ' 
    ) {
      const data = await get(val).catch((err) =>
        set({ isError: err.message, isLoading: false, data: [] })
      );

      if (data.status === 201) {
        set({ isLoading: false, isError: '', data: data.data });
      }
    } else {
      set({
        isError: 'Qidirish uchun nimadur kiriting!!',
        isLoading: false,
        data: [],
      });
    }

    console.log(data);
  };

  const onSubmit = (evt) => {
    set({ isLoading: true, isError: '', data: [] });
    evt.preventDefault();
    getData(inputRef.current.value);
  };

  return (
    <section className="relative">
      <div className="container">
        <SearchBox
          className={
            (inputRef.current?.value.length && search.data.length) ||
            (inputRef.current?.value.length && search.isError) ||
            (inputRef.current?.value.length && search.isLoading) ||
            search.isError ||
            search.isLoading
              ? 'rounded-2xl bg-white dark:bg-bgDark true'
              : 'rounded-2xl bg-white dark:bg-bgDark'
          }
        >
          <h2
            className={`text-center ${
              lang.ru ? 'font-normal' : 'font-poppins'
            }  text-3xl text-profileLink`}
          >
            {lang[language].HomePage.main.search.searchTitle}
          </h2>
          <form
            onSubmit={onSubmit}
            style={{ width: '888px' }}
            className="mx-auto mt-2"
          >
            <input
              ref={inputRef}
              style={{ width: '710px' }}
              className={`${
                lang.ru ? 'font-normal' : 'font-poppins'
              }  py-3 px-6 text-base rounded-2xl outline-none focus:outline-orange-300 mr-4 bg-searchBg dark:bg-searchBgDark text-searchPlaceholder dark:text-searchPlaceholderDark`}
              type="text"
              name="author"
              placeholder={
                lang[language].HomePage.main.search.searchInputPlaceholder
              }
            />
            <SearchBtn
              className={`bg-profileLink dark:text-searchDark py-3 w-40 text-right pr-11 text-base ${
                lang.ru ? 'font-normal' : 'font-poppins'
              }  text-searchBtn rounded-2xl`}
              type="submit"
            >
              {lang[language].HomePage.main.search.searchBtn}
            </SearchBtn>
          </form>
        </SearchBox>
        {activePage && inputRef.current?.value?.length && search.data.length ? (
          <ul
            onClick={(evt) => console.log(evt)}
            className="flex items-center justify-between flex-wrap mt-48"
          >
            {search.data.map((item) => (
              <li key={item.id} className="mb-6">
                <AuthorCard obj={item} />
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
        {!activePage &&
        inputRef.current?.value?.length &&
        search.data.length ? (
          <ul className="flex items-center justify-between flex-wrap mt-48">
            {search.data.map((item) => (
              <li key={item.id} className="mb-6">
                <BookCard obj={item} />
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
        {search.isError ? (
          <h2 className="text-center text-4xl mt-48 text-red-700">
            {search.isError}!
          </h2>
        ) : (
          ''
        )}
        {search.isLoading ? (
          <h2 className="text-center mt-48 text-4xl text-amber-600">
            Loading...
          </h2>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};
