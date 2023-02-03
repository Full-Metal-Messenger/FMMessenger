import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../services/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(true);
  const [error, setError] = useState('');
  const [username, setusername] = useState('');
  const [defaultState, setDefaultState] = useState({ id: '', username: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncUser = async () => {
      const thisUser = await getUser();
      setUser(thisUser);
    };
    if (localStorage.getItem('sb-kplqqqfafshaldfzhgir-auth-token')) {
      const {
        user: {
          id,
          user_metadata: { username },
        },
      } = JSON.parse(
        localStorage.getItem('sb-kplqqqfafshaldfzhgir-auth-token')
      );
      console.log(id, username);
      if (id) {
        console.log(id, username);
        setDefaultState({ id: id, username: username });
      }
    }
    !user.email && asyncUser();
    setLoading(false);
  }, [localStorage]);
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
        setUser,
        user,
        defaultState,
        loading,
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
{
}
