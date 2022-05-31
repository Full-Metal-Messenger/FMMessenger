import { client, parseData } from './client';

export function getUser() {
  return client.auth.user();
}

export async function signUpUser({ email, password }, username) {
  const { user, error } = await client.auth.signUp(
    { email, password },
    { data: { username } }
  );
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return parseData(response);
}
