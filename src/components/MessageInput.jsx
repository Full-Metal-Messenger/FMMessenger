import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import useMessage from '../hooks/UseMessage/UseMessage';

function MessageInput() {
  const { post, setPost } = useMessage();
  const { handleSubmit } = useMessage();
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl display="flex" justifySelf="end" p="2">
          <Input
            placeholder="Transmutation starts here"
            onFocus={() => window.scrollTo(0, document.body.scrollHeight)}
            px="10"
            type="text"
            aria-label="message"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <Button aria-label="Add New Entry" type="submit">
            Send
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default MessageInput;
