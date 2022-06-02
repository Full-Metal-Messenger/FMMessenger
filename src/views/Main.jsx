import { Box } from '@chakra-ui/react';
import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';
import MessageInput from '../components/MessageInput';
import RoomsList from '../components/RoomsList';
import useMessage from '../hooks/UseMessage/UseMessage';

function Main() {
  const { ref } = useMessage();
  return (
    <Box
      ref={ref}
      display="flex"
      minH="100vh"
      flexDirection="column"
      position="relative"
      justifyItems="center"
      alignItems="stretch"
      flex="1"
      py="2"
    >
      <Header />
      <Box
        w="100%"
        display="flex"
        flex="1"
        flexDirection="column"
        justifyItems="center"
        alignItems="stretch"
        textAlign="center"
      >
        <Box display="flex" flex="1" flexDirection="column" maxH="100%">
          <Chat />
        </Box>
      </Box>
      <Box position="sticky" bottom="0" bg="#1a202c">
        <MessageInput />
      </Box>
    </Box>
  );
}

export default Main;
