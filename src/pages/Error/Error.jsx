import React from 'react';
import ErrorImg from '../../assets/images/404-error.svg';

export const Error = () => {
  return (
    <div>
      <img
        className="absolute top-0 right-0 bottom-0 left-96"
        src={ErrorImg}
        width='700px'
        height='700px'
        alt="Page Not Found"
      />
    </div>
  );
};
