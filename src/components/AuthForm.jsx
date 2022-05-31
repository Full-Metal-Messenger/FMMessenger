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
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signInUser, signUpUser } from '../services/auth';

function AuthForm() {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue('gray.100', 'gray.700');
  const [cred, setCred] = useState(true);

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
      if (type === 'sign-in') {
        const data = await signInUser(email, password);
        console.log(data);
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password }, username);
        setCurrentUser(data);
        history.push('/');
      }
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackGround} p={12} rounded={6}>
        <Button onClick={toggleColorMode}>Toggle Dark Theme</Button>
        <form>
          <Heading>Log in</Heading>
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
          <Button onClick={handleSubmit} width="full" mb={6} colorScheme="teal">
            Log in
          </Button>
          {/* conditionally render these */}
          <LinkBox>
            <Link onClick={() => setType('sign-in')}>
              Already Have an account. Sign In
            </Link>
          </LinkBox>
          <LinkBox>
            <Link onClick={() => setType('sign-up')}>
              Dont have an account? Sign Up
            </Link>
          </LinkBox>
        </form>
      </Flex>
    </Flex>
  );
}

export default AuthForm;
