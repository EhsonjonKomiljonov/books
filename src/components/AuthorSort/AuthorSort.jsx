import { NavLink, Outlet } from 'react-router-dom';

export const AuthorSort = () => {
  return (
    <section className="mt-44 pb-36">
      <div className="container">
        <div>
          <h2 className="text-center text-3xl text-profileLink">
            Asosiy kategoriyalar
          </h2>
          <ul
            style={{ width: '715px' }}
            className="flex items-center justify-between mx-auto mb-8 mt-3 p-3"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg text-profileLink'
                    : 'text-lg text-colorSort'
                }
                to="temuriylar"
              >
                Temuriylar davri
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg text-profileLink'
                    : 'text-lg text-colorSort'
                }
                to="jadidlar"
              >
                Jadidlar davri
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg text-profileLink'
                    : 'text-lg text-colorSort'
                }
                to="sovet"
              >
                Sovet davri
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg text-profileLink'
                    : 'text-lg text-colorSort'
                }
                to="mustaqillik"
              >
                Mustaqillik davri
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
