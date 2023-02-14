import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { setUser } from './redux/user/userAction';

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);
  const { theme } = useContext(ThemeContext);

  dispatch(setToken(localStorage.getItem('token')));
  dispatch(setUser(JSON.parse(localStorage.getItem('user'))));

  // console.log(useSelector((state) => state.users));

  if (token) {
    return (
      <div className={`${theme}`}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className={`${theme}`}>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
