import { createContext, useContext, useState } from 'react';

export const ColorModeContext = createContext();

const ColorModeProvider = ({ children }) => {
  const [light, setLight] = useState(false);

  return (
    <ColorModeContext.Provider value={{ light, setLight }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorModeContext = () => {
  const data = useContext(ColorModeContext);
  if (data === undefined) {
    throw new Error(
      'useColorModeContext must be used within a ColorModeProvider'
    );
  }
  return data;
};

export { ColorModeProvider, useColorModeContext };
