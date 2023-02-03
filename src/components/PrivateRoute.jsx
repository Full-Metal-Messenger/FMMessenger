import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage/useLocalStorage';

export function PrivateRoute({ children, ...rest }) {
  const { id } = useLocalStorage();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
