import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Link,
  LinkBox,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useAuthForm from '../hooks/UseAuthForm/useAuthForm';
// import { useColorModeContext } from '../context/ColorModeContext';

function AuthForm() {
  const { setEmail, setPassword, setType, error, setusername } =
    useAuthContext();

  const { email, password, type, setError, username, handleSubmit } =
    useAuthForm();
  // const { light } = useColorModeContext();
  const bg = useColorModeValue('gray.200', 'black');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={bg} p={12} rounded={6}>
        <form onSubmit={handleSubmit}>
          <Heading>{type ? 'Log in' : 'Sign Up'}</Heading>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              variant="filled"
              type="email"
              placeholder="user email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              variant="filled"
              mb={6}
              type="password"
              placeholder="password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {!type && (
            <FormControl isRequired>
              <FormLabel>UserName</FormLabel>
              <Input
                variant="filled"
                mb={6}
                type="username"
                placeholder="username"
                value={username}
                autoComplete="on"
                onChange={(e) => setusername(e.target.value)}
              />
            </FormControl>
          )}
          <Button type="submit" width="full" mb={6} colorScheme="teal">
            {type ? 'Log In' : 'Sign Up'}
          </Button>
          {error && (
            <Text>
              {error === 'Database error saving new user' ? (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              ) : (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
            </Text>
          )}
          {!type ? (
            <LinkBox>
              Already Have an account?
              <Text fontWeight="bold">
                <Link
                  onClick={() => {
                    setType(true), setError('');
                  }}
                >
                  {' '}
                  Sign In
                </Link>
              </Text>
            </LinkBox>
          ) : (
            <LinkBox>
              Dont have an account?
              <Text fontWeight="bold">
                <Link
                  onClick={() => {
                    setType(false), setError('');
                  }}
                >
                  Sign Up
                </Link>
              </Text>
            </LinkBox>
          )}
        </form>
      </Flex>
    </Flex>
  );
}

export default AuthForm;
