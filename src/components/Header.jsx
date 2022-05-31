import { Button, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';
import Profiles from './Profiles';

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
    <Flex flex="1" maxH="50px" justifyContent="space-between" mb="20px">
      <Profiles />

      {user && <Button onClick={handleSubmit}>LogOut</Button>}
      <Button onClick={toggleColorMode}>Toggle Dark Theme</Button>
    </Flex>
  );
}
