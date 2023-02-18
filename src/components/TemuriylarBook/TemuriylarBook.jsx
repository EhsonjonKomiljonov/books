import React, { useEffect, useState } from 'react';
import { api } from '../../API/api';
import { BookCard } from '../BookCard/BookCard';

export const TemuriylarBooks = () => {
  const [bookGenre, setBookGenre] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  const getBookId = async () => {
    setBookGenre({
      isLoading: true,
      isError: '',
      data: [],
    });

    const data = await api.getTemuriylarBooks().catch((err) =>
      setBookGenre({
        isLoading: false,
        isError: err.message,
        data: [],
      })
    );

    if (data.status === 201) {
      setBookGenre({
        isLoading: false,
        isError: '',
        data: data.data,
      });
    }
  };

  useEffect(() => {
    getBookId();
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap">
      {bookGenre.data.length
        ? bookGenre.data.map((item) => <BookCard obj={item} />)
        : ''}
    </div>
  );
};
