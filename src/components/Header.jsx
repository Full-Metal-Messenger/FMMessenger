import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';
import NewRoomPop from './NewRoomPop';
import Profiles from './Profiles';
import { useState } from 'react';
import RoomsList from './RoomsList';

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
      position="sticky"
      top="0"
      left="0"
      h="auto"
      maxW="100%"
      justifyContent="space-between"
      mb="20px"
      bg="#1a202c"
      boxShadow="lg"
      zIndex="1"
    >
      <Box display="flex">
        <RoomsList />
        <NewRoomPop />
        <Profiles />
      </Box>
      <Box
        position={['fixed', 'fixed', 'relative', 'relative']}
        right="0"
        display={['', '', 'flex', 'flex']}
      >
        {user && (
          <Box>
            <Button size="sm" my="5" clear="all" onClick={handleSubmit}>
              LogOut
            </Button>
          </Box>
        )}
        <Button
          position={['fixed', 'fixed', 'relative', 'relative']}
          top={['50', '50', '0', '0']}
          right={['0', '0', '', '']}
          bg={['#1a202c', '#1a202c', '#2c313d', '#2c313d']}
          my="5"
          size="sm"
          onClick={() => {
            setLight(!light), toggleColorMode();
          }}
        >
          {!light ? <FaMoon color="white" /> : <FaSun color="white" />}
        </Button>
      </Box>
    </Flex>
  );
}
