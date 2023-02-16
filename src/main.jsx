import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './assets/styles/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { GloabalStyles } from './GlobalStyles.styles';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SearchAuthorProvider } from './context/SearchAuthorContext';
import { SearchBooksProvider } from './context/SearchBooksContext';
import { ActivePageProvider } from './context/ActivePageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GloabalStyles />
    <Provider store={store}>
      <ThemeProvider>
        <SearchAuthorProvider>
          <SearchBooksProvider>
            <ActivePageProvider>
              <App />
            </ActivePageProvider>
          </SearchBooksProvider>
        </SearchAuthorProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
