import Main from './views/Main';
import Auth from './views/Auth';
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </AuthProvider>
  );
}
