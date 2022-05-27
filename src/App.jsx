import Main from './views/Main';
import Auth from './views/Auth';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
