import React, { useEffect, useState } from 'react';
import { api } from '../../API/api';
import { AuthorCard } from '../AuthorCard/AuthorCard';

export const Sovet = () => {
  const [authorGenre, setAuthorGenre] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  const getAuthorId = async () => {
    setAuthorGenre({
      isLoading: true,
      isError: '',
      data: [],
    });

    const data = await api.getSovetAuthors().catch((err) =>
      setAuthorGenre({
        isLoading: false,
        isError: err.message,
        data: [],
      })
    );

    if (data.status === 201) {
      setAuthorGenre({
        isLoading: false,
        isError: '',
        data: data.data,
      });
    }
  };

  useEffect(() => {
    getAuthorId();
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap">
      {authorGenre.data.length
        ? authorGenre.data.map((item) => <AuthorCard obj={item} />)
        : ''}
    </div>
  );
};
