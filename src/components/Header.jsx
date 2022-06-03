import {
  Box,
  Flex,
  Text,
  useColorMode,
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  useDisclosure,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { logout } from '../services/auth';
import NewRoomPop from './NewRoomPop';
import Profiles from './Profiles';
import { useState } from 'react';
import RoomsList from './RoomsList';
import LandingButton from './LandingButton';
import { useEffect } from 'react';
import { getProfileById, updateUserName } from '../services/messages';
import { AiTwotoneEdit } from 'react-icons/ai';
import useToastAlert from '../hooks/useToast/useToastAlert';

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const [light, setLight] = useState(true);
  const [usersProfile, setUsersProfile] = useState('');
  const { isOpen, onToggle, onClose } = useDisclosure();

  const history = useHistory();
  const { user, setCurrentUser, setEmail, setPassword, setusername } =
    useAuthContext();
  const { setToastMessage } = useToastAlert();
  const handleSubmit = () => {
    logout();
    history.push('/auth');
    setCurrentUser('');
    setEmail('');
    setPassword('');
    setusername('');
  };

  useEffect(() => {
    getProfileById(user.id).then(({ username }) => setUsersProfile(username));
  }, []);

  const handleProfileEdit = async () => {
    await updateUserName(usersProfile);
    onClose();
    setToastMessage({
      position: 'top',
      description: `UserName Changed to ${usersProfile}`,
      status: 'success',
    });
    setToastMessage('');
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
        <LandingButton />
      </Box>
      <Box>
        <Text>{usersProfile}</Text>

        <Button
          onClick={onToggle}
          size="xs"
          variant="ghost"
          rightIcon={<AiTwotoneEdit />}
        />
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              What would you like to change your name to.
              <Input
                value={usersProfile}
                onChange={(e) => setUsersProfile(e.target.value)}
              />
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleProfileEdit}>
                  Apply
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
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
