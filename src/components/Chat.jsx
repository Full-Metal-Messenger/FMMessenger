import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useMessage from '../hooks/UseMessage/UseMessage';

function Chat() {
  const { user } = useAuthContext();
  const { messages } = useMessage();
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="end"
      p="4"
    >
      {messages.map(
        ({ id, created_at, posts, profile_id, profiles: { username } }) => (
          <Box
            key={id}
            border="1px"
            borderRadius="18px"
            p="2"
            m="2"
            alignSelf={user.id !== profile_id ? 'flex-start' : 'flex-end'}
            bg={user.id === profile_id ? 'blue.300' : 'gray.500'}
          >
            <Text>{posts}</Text>
            <Text
              fontSize="xs"
              color={user.id !== profile_id ? 'blue.300' : 'gray.500'}
              textAlign="left"
            >
              {username}
            </Text>
          </Box>
        )
      )}
    </Box>
  );
}

export default Chat;
