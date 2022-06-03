import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import AddTooRoomPop from '../components/AddTooRoomPop';
import Header from '../components/Header';
import image from '../assets/alchemy.png';
import styled, { keyframes } from 'styled-components';

const animated = keyframes`
     
      0% {
        color: red;
      }
      50% {
        color: blue;
      }
      100% {
        color: red;
      }
      `;

const StyledLink = styled(Link)`
  animation-name: ${animated};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
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
          <StyledLink
            href="https://www.linkedin.com/in/bradley-bird/
"
            isExternal
          >
            Bradley Bird
          </StyledLink>
          , {''}
          <StyledLink
            href="https://www.linkedin.com/in/brendenseifried/"
            isExternal
          >
            Brenden Seifried
          </StyledLink>
          , and{' '}
          <StyledLink
            href="https://www.linkedin.com/in/andy-Mascaro"
            isExternal
          >
            Andy Mascaro
          </StyledLink>
          .
        </Text>
      </Box>

      <AddTooRoomPop />
    </Box>
  );
}
export default Landing;
