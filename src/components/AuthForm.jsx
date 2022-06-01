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
  useColorMode,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/auth';

function AuthForm() {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue('gray.100', 'gray.700');

  const history = useHistory();
  const {
    email,
    setEmail,
    password,
    setPassword,
    type,
    setType,
    error,
    setError,
    username,
    setusername,
    setCurrentUser,
  } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type) {
        const data = await signInUser(email, password);
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password }, username);
        setCurrentUser(data);
        history.push('/');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackGround} p={12} rounded={6}>
        <Button onClick={toggleColorMode}>Toggle Dark Theme</Button>
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
          <Button
            aria-label="submit"
            type="submit"
            width="full"
            mb={6}
            colorScheme="teal"
          >
            {type ? 'Log In' : 'Sign Up'}
          </Button>
          {error && (
            <Text>
              {error === 'Database error saving new user' ? (
                <Alert status="error">
                  <AlertIcon />
                  'Username already registered'
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
