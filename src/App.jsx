import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

function App() {
  const { theme } = useContext(ThemeContext);
  const token = false;

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
