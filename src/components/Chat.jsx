import {
  Box,
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useMessage from '../hooks/UseMessage/UseMessage';

function Chat() {
  const { user } = useAuthContext();
  const { messages, removeMessage } = useMessage();

  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="end"
      p="4"
      maxW="99%"
      mx="auto"
      minW="40%"
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
            ndex={1}
          >
            <Text>{posts}</Text>

            <Text
              fontSize="xs"
              color={user.id !== profile_id ? 'blue.300' : 'gray.500'}
              textAlign="left"
            >
              {username}
            </Text>

            <Text
              fontSize="xs"
              color={user.id !== profile_id ? 'blue.300' : 'gray.500'}
              textAlign="left"
            >
              {`${new Date(created_at).toLocaleString()}`}
            </Text>
          </Box>
        )
      )}
    </Box>
  );
}

export default Chat;
