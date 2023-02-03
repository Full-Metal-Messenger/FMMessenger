import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export function PrivateRoute({ children, ...rest }) {
  const {
    currentSession: {
      user: { id },
    },
  } = JSON.parse(localStorage.getItem('supabase.auth.token'));

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
