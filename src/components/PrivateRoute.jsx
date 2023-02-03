import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
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
