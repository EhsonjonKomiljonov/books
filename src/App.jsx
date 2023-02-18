import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { setUser } from './redux/user/userAction';
import { Private } from './apps/Private/Private';
import { Public } from './apps/Public/Public';
import { setDarkMode } from './redux/theme/themeAction';

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);
  const { theme } = useContext(ThemeContext);

  dispatch(setToken(localStorage.getItem('token') || ''));
  dispatch(setUser(JSON.parse(localStorage.getItem('user')) || ''));
  dispatch(setDarkMode(localStorage.getItem('theme') || ''));

  if (token) {
    return (
      <>
        <main className={theme}>
          <Private />
        </main>
      </>
    );
  }

  return (
    <>
      <main className={theme}>
        <Public />
      </main>
    </>
  );
}

export default App;
