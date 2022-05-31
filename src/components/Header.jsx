import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const history = useHistory();
  const { user, setCurrentUser, setEmail, setPassword, setusername } =
    useAuthContext();
  const handleSubmit = () => {
    logout();
    history.push('/auth');
    setCurrentUser('');
    setEmail('');
    setPassword('');
    setusername('');
  };

  return (
    <>
      {user && <Button onClick={handleSubmit}>LogOut</Button>}
      <Button onClick={toggleColorMode}>Toggle Dark Theme</Button>
    </>
  );
}
