import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useMessage from '../hooks/UseMessage/UseMessage';
import { FaTrash } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';

function Chat() {
  const { user } = useAuthContext();
  const { messages, removeMessage } = useMessage();

  const handleDelete = async () => {};

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
            zIndex="0"
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
              {user.id === profile_id && (
                <>
                  <Button
                    key={id}
                    onClick={handleDelete}
                    size="xs"
                    variant="ghost"
                    rightIcon={<FaTrash />}
                  />
                  <Button
                    key={id}
                    onClick={handleDelete}
                    size="xs"
                    variant="ghost"
                    rightIcon={<AiTwotoneEdit />}
                  />
                </>
              )}
            </Text>
          </Box>
        )
      )}
    </Box>
  );
}

export default Chat;
