import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';

export default function Header() {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useAuthContext();
  const handleSubmit = () => {
    logout();
    history.push('/auth');
    setCurrentUser('');
  };

  return <>{currentUser && <Button onClick={handleSubmit}>LogOut</Button>}</>;
}
