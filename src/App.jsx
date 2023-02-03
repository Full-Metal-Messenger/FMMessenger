import Main from './views/Main';
import Auth from './views/Auth';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Landing from './views/Landing';
import { useAuthContext } from './context/AuthContext';

export default function App() {
  const { loading } = useAuthContext();
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/:id">
          <Main />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Landing />
        </PrivateRoute>
      </Switch>
    </>
  );
}
