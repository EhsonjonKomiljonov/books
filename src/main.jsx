import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './assets/styles/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { GloabalStyles } from './GlobalStyles.styles';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GloabalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
