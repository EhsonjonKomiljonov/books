import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { api } from '../../API/api';
import Logo from '../../assets/images/logo.svg';
import { removeToken } from '../../redux/token/tokenAction';
import { removeUser, setUser } from '../../redux/user/userAction';
import {
  HeaderProfileDropDown,
  HeaderProfileDropDownBtn,
  HeaderProfileDropDownLink,
} from './header.styles';
import { lang } from '../../lang/lang';
import { LocalizationContext } from '../../context/LocalizationContext';
import { ThemeContext } from '../../context/ThemeContext';

export const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { lang: language } = useContext(LocalizationContext);
  const { setTheme } = useContext(ThemeContext);

  const dispetch = useDispatch();

  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user);

  const getUser = async () => {
    const data = await api.userData(token).catch((err) => console.log(err));
    if (data.status === 201) {
      localStorage.setItem('user', JSON.stringify(data.data));
      dispetch(setUser(data.data));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleLogOut = () => {
    dispetch(removeToken());
    dispetch(removeUser());

    setTheme('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('theme');

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
                  className={({ isActive }) =>
                    isActive
                      ? `text-black ${
                          lang.ru ? 'font-normal' : 'font-poppins'
                        }  dark:text-white`
                      : `text-black opacity-50 ${
                          lang.ru ? 'font-normal' : 'font-poppins'
                        }  dark:text-white`
                  }
                  to="/home"
                >
                  {lang[language].HomePage.header.home}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `text-black ${
                          lang.ru ? 'font-normal' : 'font-poppins'
                        } dark:text-white`
                      : `text-black ${
                          lang.ru ? 'font-normal' : 'font-poppins'
                        } opacity-50 dark:text-white`
                  }
                  to="/books"
                >
                  {lang[language].HomePage.header.books}
                </NavLink>
              </li>
              <li className="ml-11 relative">
                <HeaderProfileDropDownBtn
                  style={{ width: '49px', height: '49px' }}
                  className={`text-9xl inline-block ${
                    user.image ? '' : 'bg-profilePlaceholderColor'
                  } cursor-pointer text-white`}
                  onClick={() => handleDropDown()}
                >
                  {user.image != null ? (
                    <img
                      style={{ width: '49px', height: '49px' }}
                      className="rounded-full"
                      src={'http://localhost:5000/' + user.image}
                      alt={user.first_name}
                    />
                  ) : (
                    user.first_name.at(0)
                  )}
                </HeaderProfileDropDownBtn>
                <HeaderProfileDropDown
                  className={
                    dropDown
                      ? `block absolute bg-drop dark:bg-dropdownDark ${
                          lang.ru ? 'font-normal' : 'font-poppins'
                        }  rounded-lg py-2 px-6`
                      : 'hidden'
                  }
                >
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className={`text-black dark:text-profileLink inline-block w-24 ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      } `}
                      to="/profile"
                    >
                      {lang[language].HomePage.header.dropDown.profile}
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className={`text-black dark:text-profileLink inline-block w-24 ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      } `}
                      to="/add-author"
                    >
                      {lang[language].HomePage.header.dropDown.addAuthor}
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className={`text-black dark:text-profileLink inline-block w-24 ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      } `}
                      to="/add-book"
                    >
                      {lang[language].HomePage.header.dropDown.addBook}
                    </HeaderProfileDropDownLink>
                  </li>
                  <li className="py-2">
                    <HeaderProfileDropDownLink
                      className={`text-black dark:text-profileLink inline-block w-24 ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      } `}
                      onClick={() => handleLogOut()}
                      to="/"
                    >
                      {lang[language].HomePage.header.dropDown.logOut}
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
