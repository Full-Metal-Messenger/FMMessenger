import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user || { email: null });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('sign-in');
  const [error, setError] = useState('');
  const [username, setusername] = useState('');
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        type,
        setType,
        error,
        setError,
        username,
        setusername,
        currentUser,
        setCurrentUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error('Auth ContextProvider not wrapped!');
  }
  return data;
};

export { AuthProvider, useAuthContext };
