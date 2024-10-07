import {
  Box,
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
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import NewRoomPop from './NewRoomPop';
import Profiles from './Profiles';
import RoomsList from './RoomsList';
import LandingButton from './LandingButton';
import { AiTwotoneEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { animated } from '../views/Landing';
import useHeaderHook from '../hooks/UseHeader/useHeaderHook';
import { useColorModeContext } from '../context/ColorModeContext';

const StyledText = styled(Text)`
  animation-name: ${animated};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  font-size: 22px;
  margin-bottom: 10px;
`;
export default function Header() {
  //built in color mode toggle 119
  const { toggleColorMode } = useColorMode();
  const { user, loading } = useAuthContext();
  const { light, setLight } = useColorModeContext();
  const {
    isOpen,
    onToggle,
    onClose,
    // light,
    // setLight,
    room,
    usersProfile,
    setUsersProfile,
    handleSubmit,
    handleProfileEdit,
  } = useHeaderHook();
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <Box
      position="sticky"
      top="0"
      left="0"
      h="150px"
      maxW="100%"
      mb="20px"
      bg="#1a202c"
      boxShadow="lg"
      zIndex="1"
    >
      <Box display="flex" justifyContent="space-between">
        <RoomsList />
        <NewRoomPop />
        <Profiles />
        <LandingButton />
        {user && (
          <Box>
            <Button size="sm" mt="5" clear="all" onClick={handleSubmit}>
              LogOut
            </Button>
          </Box>
        )}
      </Box>
      <Box mt="5">
        <Button
          size="xs"
          variant="ghost"
          onClick={() => {
            setLight(!light), toggleColorMode();
          }}
        >
          {!light ? <FaMoon color="white" /> : <FaSun color="white" />}
        </Button>

        <StyledText as="kbd">Welcome {usersProfile}</StyledText>
        <Button
          onClick={onToggle}
          size="xs"
          variant="ghost"
          rightIcon={<AiTwotoneEdit />}
        />
        <StyledText as="kbd">
          You are in {!room ? 'FMM' : room?.name}
        </StyledText>
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
      ></Box>
    </Box>
  );
}
