import { createContext, useContext, useEffect, useState } from 'react';
import { getUser, signInUser } from '../services/auth';

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
      if (!user.length) {
        const thisUser = await getUser();

        setLoading(false);
      }
    };

    const userFromStorage = () => {
      if (localStorage.getItem('sb-kplqqqfafshaldfzhgir-auth-token')) {
        const {
          user: {
            id,
            user_metadata: { username },
          },
        } = JSON.parse(
          localStorage.getItem('sb-kplqqqfafshaldfzhgir-auth-token')
        );
        if (id) {
          setDefaultState({ id: id, username: username });
          setUser({ id: id, username: username });
        }
      }
      setLoading(false);
    };

    asyncUser();
    userFromStorage();
  }, []);

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
        setDefaultState,
        loading,
        setLoading,
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
