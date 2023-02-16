import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthorCardContent, AuthorCardImg } from './AuthorCard.styles';

export const AuthorCard = ({ obj }) => {
  const { image, first_name, date_of_death, date_of_birth, id, last_name } =
    obj;
  return (
    <NavLink to={`/authors/${id}`} >
      <div
        key={id}
        className="rounded-xl mb-4 bg-slate-100 dark:bg-bgAuthorCard cursor-pointer"
      >
        <AuthorCardImg
          className="rounded-t-xl"
          src={`http://localhost:5000/${image}`}
          alt={first_name}
        />
        <AuthorCardContent className="pt-3 px-4 pb-14">
          <h3 className="text-2xl dark:text-profileLink mb-2 font-medium">
            {first_name} {last_name}
          </h3>
          <p className="text-slate-600 dark:text-colorCardDate">
            {date_of_birth}-{date_of_death}
          </p>
        </AuthorCardContent>
      </div>
    </NavLink>
  );
};
