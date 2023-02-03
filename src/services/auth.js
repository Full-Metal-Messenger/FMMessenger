import { client, parseData } from './client';

export async function getUser() {
  const {
    data: { session },
  } = await client.auth.getSession();
  const { user } = session;
  return user;
}

export async function signUpUser({ email, password }, username) {
  const {
    data: { user },
    error,
  } = await client.auth.signUpWithPassword(
    { email, password },
    { data: { username } }
  );
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
