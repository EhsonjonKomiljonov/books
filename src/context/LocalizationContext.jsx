import { createContext, useState } from 'react';

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz');

  return (
    <LocalizationContext.Provider value={{ lang, setLang }}>
      {children}
    </LocalizationContext.Provider>
  );
};
