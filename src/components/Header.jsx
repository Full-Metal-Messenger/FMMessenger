import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useRooms from '../hooks/useRooms';
import { logout } from '../services/auth';
import NewRoomPop from './NewRoomPop';
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
    >
      <Profiles />

      {user && (
        <Button m="5" onClick={handleSubmit}>
          LogOut
        </Button>
      )}
      <Button m="5" onClick={toggleColorMode}>
        Toggle
      </Button>
      <NewRoomPop />
    </Flex>
  );
}
