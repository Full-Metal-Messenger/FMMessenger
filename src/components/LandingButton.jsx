import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function LandingButton() {
  return (
    <Box>
      <Link to="/">
        <Button></Button>
      </Link>
    </Box>
  );
}

export default LandingButton;
