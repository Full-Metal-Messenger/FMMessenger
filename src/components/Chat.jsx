import { Box } from '@chakra-ui/react';
import React from 'react';
import useMessage from '../hooks/UseMessage/UseMessage';

function Chat() {
  const { messages } = useMessage();
  return (
    <Box w="100%">
      {messages.map(({ id, posts }) => (
        <p key={id}>{posts}</p>
      ))}
    </Box>
  );
}

export default Chat;
