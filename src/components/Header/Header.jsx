import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { removeToken } from '../../redux/token/tokenAction';
import { removeUser } from '../../redux/user/userAction';
import {
  HeaderProfileDropDown,
  HeaderProfileDropDownBtn,
  HeaderProfileDropDownLink,
} from './header.styles';

export const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const dispetch = useDispatch();

  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleLogOut = () => {
    dispetch(removeToken());
    dispetch(removeUser());

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <header className="py-7 dark:bg-bgDark">
      <div className="container">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <nav>
            <ul className="flex items-center">
              <li className="mr-11">
                <NavLink
                  style={{ fontFamily: 'Poppins' }}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black font-normal dark:text-white'
                      : 'text-black opacity-50 font-normal dark:text-white'
                  }
                  to="/home"
                >
                  Bosh Sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black font-normal dark:text-white'
                      : 'text-black font-normal opacity-50 dark:text-white'
                  }
                  to="/books"
                >
                  Kitoblar
                </NavLink>
              </li>
              <li className="ml-11 relative">
                <HeaderProfileDropDownBtn onClick={() => handleDropDown()}>
                  {user?.first_name.at(0)}
                </HeaderProfileDropDownBtn>
                <HeaderProfileDropDown
                  className={
                    dropDown
                      ? 'block absolute bg-drop dark:bg-dropdownDark rounded-lg py-2 px-6'
                      : 'hidden'
                  }
                >
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className="text-black dark:text-profileLink"
                      to="/profile"
                    >
                      <p>Profile</p>
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className="text-black dark:text-profileLink"
                      to="/add-author"
                    >
                      <p>Add author</p>
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className="text-black dark:text-profileLink"
                      to="/add-book"
                    >
                      <p>Add book</p>
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className="text-black dark:text-profileLink"
                      onClick={() => handleLogOut()}
                      to="/"
                    >
                      <p>Log out</p>
                    </HeaderProfileDropDownLink>
                  </li>
                </HeaderProfileDropDown>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
