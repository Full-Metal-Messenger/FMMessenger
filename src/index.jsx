import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/MessageContext';
import { ColorModeProvider } from './context/ColorModeContext';

render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <ColorModeProvider>
        <AuthProvider>
          <MessageProvider>
            <Router>
              <App />
            </Router>
          </MessageProvider>
        </AuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
