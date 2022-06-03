import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useMessage from '../hooks/UseMessage/UseMessage';
import { FaTrash } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';
import { deleteMessage } from '../services/messages';

function Chat() {
  const { user } = useAuthContext();
  const { messages } = useMessage();

  const handleDelete = async (id) => {
    deleteMessage(id);
  };

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
                    onClick={() => handleDelete(id)}
                    size="xs"
                    variant="ghost"
                    rightIcon={<FaTrash />}
                  />
                  <Button
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
