import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth isn't inside a Provider!");
  }

  return context;
}
