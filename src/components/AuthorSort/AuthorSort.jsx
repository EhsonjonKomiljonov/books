import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';

export const AuthorSort = () => {
  const { lang: language } = useContext(LocalizationContext);
  return (
    <section className="mt-44 pb-36">
      <div className="container">
        <div>
          <h2
            className={`text-center text-3xl ${
              lang.ru ? 'font-normal' : 'font-poppins'
            }  text-profileLink`}
          >
            {lang[language].HomePage.main.mainCategories.title}
          </h2>
          <ul
            style={{ width: '100%', maxWidth: '770px' }}
            className="flex items-center justify-between mx-auto mb-8 mt-3 p-3"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `text-lg ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  text-profileLink`
                    : `text-lg text-colorSort ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  dark:text-white opacity-60`
                }
                to="temuriylar"
              >
                {lang[language].HomePage.main.mainCategories.categoryTitle1}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `text-lg ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  text-profileLink`
                    : `text-lg text-colorSort ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  dark:text-white opacity-60`
                }
                to="jadidlar"
              >
                {lang[language].HomePage.main.mainCategories.categoryTitle2}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `text-lg ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  text-profileLink`
                    : `text-lg text-colorSort ${
                        lang.ru ? 'font-normal mr-5' : 'font-poppins'
                      }  dark:text-white opacity-60`
                }
                to="sovet"
              >
                {lang[language].HomePage.main.mainCategories.categoryTitle3}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `text-lg ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      }  text-profileLink`
                    : `text-lg text-colorSort ${
                        lang.ru ? 'font-normal' : 'font-poppins'
                      }  dark:text-white opacity-60`
                }
                to="mustaqillik"
              >
                {lang[language].HomePage.main.mainCategories.categoryTitle4}
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
