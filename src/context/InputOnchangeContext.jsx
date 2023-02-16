import { createContext, useState } from 'react';

export const InputOnChangeContext = createContext();

export const InputOnChangeProvider = ({ children }) => {
  const [input, setInput] = useState(false);

  return (
    <InputOnChangeContext.Provider value={{ input, setInput }}>
      {children}
    </InputOnChangeContext.Provider>
  );
};
