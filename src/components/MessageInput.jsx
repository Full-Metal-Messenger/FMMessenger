import {
  Box,
  Button,
  FormControl,
  Input,
  toast,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import useMessage from '../hooks/UseMessage/UseMessage';

function MessageInput() {
  const toast = useToast();
  const { post, setPost } = useMessage();
  const { handleSubmit, ref } = useMessage();
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl display="flex" justifySelf="end" p="2">
          <Input
            onFocus={() => window.scrollTo(0, document.body.scrollHeight)}
            px="10"
            type="text"
            aria-label="message"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <Button
            aria-label="Add New Entry"
            type="submit"
            onClick={() =>
              toast({
                isClosable: 'true',
                duration: 1200,
                position: 'top-left',
                render: () => (
                  <Box
                    border="1px"
                    borderRadius="18px"
                    color="white"
                    p={3}
                    bg="green.500"
                    // bg="blue.500"

                    w="150px"
                  >
                    Message Sent!
                  </Box>
                ),
              })
            }
          >
            Send
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default MessageInput;
