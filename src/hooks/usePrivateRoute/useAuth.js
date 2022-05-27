import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useauth isnt inside a Provider!');
  }

  return context;
}
