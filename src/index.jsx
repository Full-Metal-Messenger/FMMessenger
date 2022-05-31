import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/MessageContext';

render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <AuthProvider>
        <MessageProvider>
          <Router>
            <App />
          </Router>
        </MessageProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
