import { Box } from '@chakra-ui/react';
import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';
import MessageInput from '../components/MessageInput';
import useMessage from '../hooks/UseMessage/UseMessage';

function Main() {
  const { handleSubmit } = useMessage();
  return (
    <Box
      display="flex"
      minH="100vh"
      flexDirection="column"
      justifyItems="center"
      // alignItems="center"
      alignItems="stretch"
      flex="1"
      py="2"
    >
      <Header />
      <Box
        w="100%"
        display="flex"
        // bg="red.700"
        flex="1"
        flexDirection="column"
        justifyItems="center"
        alignItems="stretch"
        textAlign="center"
      >
        <Box display="flex" flex="1" flexDirection="column">
          <Chat />
        </Box>
      </Box>
      <Box>
        <MessageInput callBack={handleSubmit} />
      </Box>
    </Box>
  );
}

export default Main;
