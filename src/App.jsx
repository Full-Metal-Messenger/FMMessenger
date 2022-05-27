import Main from './views/Main';
import Auth from './views/Auth';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

export default function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoute path="/">
        <Main />
      </PrivateRoute>
    </Switch>
  );
}
