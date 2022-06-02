import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';
import NewRoomPop from './NewRoomPop';
import Profiles from './Profiles';
import { useState } from 'react';

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const [light, setLight] = useState(true);

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
    <Flex
      flex="1"
      position="sticky"
      top="0"
      left="0"
      h="100px"
      justifyContent="space-between"
      mb="20px"
      bg="#1a202c"
      boxShadow="lg"
      zIndex={2}
    >
      <Profiles />

      {user && (
        <Button m="5" onClick={handleSubmit}>
          LogOut
        </Button>
      )}
      <Button
        m="5"
        onClick={() => {
          setLight(!light), toggleColorMode();
        }}
      >
        {!light ? <FaMoon /> : <FaSun />}
      </Button>
      <NewRoomPop />
    </Flex>
  );
}
