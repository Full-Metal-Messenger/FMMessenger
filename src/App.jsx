import Main from './views/Main';
import Auth from './views/Auth';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Landing from './views/Landing';

export default function App() {
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
