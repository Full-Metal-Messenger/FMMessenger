import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import useMessage from '../hooks/UseMessage/UseMessage';

function MessageInput({ callBack }) {
  const { post, setPost } = useMessage();
  return (
    <Box>
      <form onSubmit={callBack}>
        <FormControl display="flex" justifySelf="end" p="2">
          <Input
            px="10"
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <Button>Send</Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default MessageInput;
