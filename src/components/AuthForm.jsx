import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  LinkBox,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

function AuthForm() {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackGround} p={12} rounded={6}>
        <Button onClick={toggleColorMode}>Toggle Dark Theme</Button>
        <form>
          <Heading>Log in</Heading>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" variant="filled" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              variant="filled"
              mb={6}
              type="password"
            />
          </FormControl>
          <Button width="full" mb={6} colorScheme="teal">
            Log in
          </Button>
          {/* conditionally render these */}
          <LinkBox>
            <Link>Already Have an account. Sign In</Link>
          </LinkBox>
          <LinkBox>
            <Link>Dont have an account? Sign Up</Link>
          </LinkBox>
        </form>
      </Flex>
    </Flex>
  );
}

export default AuthForm;
