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
  const { messages } = useMessage();

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
            zIndex={-1}
          >
            <Popover>
              <PopoverTrigger>
                <Text>
                  <Button variant="ghost">{posts}</Button>
                </Text>
              </PopoverTrigger>
              <PopoverContent>
                {' '}
                <PopoverCloseButton />
                <PopoverHeader>{posts}</PopoverHeader>
                <PopoverBody>
                  <Text>
                    By: {username} Posted at:{' '}
                    {`${new Date(created_at).toLocaleString()}`}
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>

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

{
  /* <Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>; */
}

export default Chat;
