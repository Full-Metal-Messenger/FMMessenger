import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function LandingButton() {
  return (
    <Box>
      <Link to="/">
        <Button mt="5" size="sm">
          Home
        </Button>
      </Link>
    </Box>
  );
}

export default LandingButton;
