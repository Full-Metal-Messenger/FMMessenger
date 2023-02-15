import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export function PrivateRoute({ children, ...rest }) {
  const { user, defaultState } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        defaultState.id.length || user.email ? (
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
