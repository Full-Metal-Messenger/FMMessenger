import { client, parseData } from './client';

export async function getUser() {
  // const {
  //   data: { session },
  // } = await client.auth.getSession();
  // const { user } = session;
  const {
    data: { user },
  } = await client.auth.getUser();
  return user;
}

export async function signUpUser({ email, password }, username) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  // const { user, error } = await client.auth.signIn({ email, password });
  const {
    data: { user },
    error,
  } = await client.auth.signInWithPassword({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return parseData(response);
}
