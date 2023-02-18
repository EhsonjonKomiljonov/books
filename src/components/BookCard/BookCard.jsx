import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { api } from '../../API/api';

export const BookCard = ({ obj, bookAuthorFirstName, bookAuthorLastName }) => {
  const [getAuthor, setGetAuthor] = useState({
    isLoading: false,
    isError: '',
    data: [],
  });

  const token = useSelector((state) => state.token.token);
  const { image, title, id } = obj;

  const getAuthorId = async () => {
    setGetAuthor({
      isLoading: true,
      isError: '',
      data: [],
    });

    const data = await api.getAuthor(id, token).catch((err) =>
      setGetAuthor({
        isLoading: false,
        isError: err.message,
        data: [],
      })
    );

    if (data?.status === 201) {
      setGetAuthor({
        isLoading: false,
        isError: '',
        data: data.data,
      });
    }
  };

  useEffect(() => {
    getAuthorId();
  }, [id]);

  return (
    <NavLink className='mb-6' to={`/books/${id}`}>
      <div>
        <div>
          <img
            style={{ width: '190px', height: '283px' }}
            className="rounded-xl"
            src={`http://localhost:5000/${image}`}
            width="190px"
            height="283px"
            alt={title}
          />
          <h3 className="font-poppins text-lg mt-3 dark:text-profileLink">
            {title}
          </h3>
          <p className="font-poppins mt-2 dark:text-white dark:opacity-60">
            {bookAuthorFirstName ? bookAuthorFirstName : ''}{' '}
            {bookAuthorLastName ? bookAuthorLastName : ''}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
