import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import AddTooRoomPop from '../components/AddTooRoomPop';
import Header from '../components/Header';
import image from '../assets/alchemy.png';
import styled from '@emotion/styled';

function Landing() {
  const bottomTextColor = useColorModeValue('cyan.700', 'gray.300');
  const color = useColorModeValue('black', 'transparent');
  return (
    <Box
      h="100vh"
      bgImage={image}
      bgSize="cover"
      bgAttachment="fixed"
      bgPos="50% 100%"
      pos="relative"
      bgRepeat="no-repeat"
    >
      <Header />
      <Heading bg={color} color={bottomTextColor}>
        Welcome to FullMetalMessenger
      </Heading>
      <Text bg={color} as="kbd" fontSize="4xl" color="gray.500">
        Alchemist: Someone Who Transforms Things for the Better.
      </Text>
      <Box mt="300px">
        <Text bg={color} as="kbd" fontSize="4xl" color={bottomTextColor}>
          FMM was lovingly concocted by{' '}
          <a
            href="https://www.linkedin.com/in/bradley-bird/
"
          >
            Bradley Bird
          </a>
          ,
          <a href="https://www.linkedin.com/in/brendenseifried/">
            Brenden Seifried
          </a>
          , and{' '}
          <a href="https://www.linkedin.com/in/andy-Mascaro">Andy Mascaro</a>.
        </Text>
      </Box>
      <Gradient />

      <AddTooRoomPop />
    </Box>
  );
}

export const Gradient = styled.div`
  z-index: 3;
  position: fixed;
  top: 116px;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Landing;
