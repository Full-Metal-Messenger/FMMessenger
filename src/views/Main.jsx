import { Box } from '@chakra-ui/react';
import React from 'react';
import AddTooRoomPop from '../components/AddTooRoomPop';
import Chat from '../components/Chat';
import Header from '../components/Header';
import MessageInput from '../components/MessageInput';
import useMessage from '../hooks/UseMessage/UseMessage';
import image from '../assets/alchemy.png';

function Main() {
  const { ref } = useMessage();
  return (
    <>
      <Box
        bgImage={image}
        bgSize="cover"
        bgAttachment="fixed"
        bgPos="50% 100%"
        pos="relative"
        bgRepeat="no-repeat"
        ref={ref}
        display="flex"
        minH="100vh"
        maxW="100%"
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
          <Box display="flex" flex="1" flexDirection="column" maxH="100%"></Box>
          <Chat />
        </Box>
        <Box position="sticky" bottom="0" bg="#1a202c">
          <MessageInput />
          <Box position="fixed" bottom="60%" left="10%">
            <AddTooRoomPop />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Main;
