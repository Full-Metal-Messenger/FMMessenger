import { client, parseData } from './client';

// const {
//   data: { session },
// } = await client.auth.getSession();
// const { user } = session;
export async function getUser() {
  const {
    data: { user },
  } = await client.auth.getUser();
  return user;
}

export async function signUpUser({ email, password }, username) {
  try {
    const response = await client.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        },
      },
    });
    return response.data.user;
  } catch (error) {
    throw error;
  }
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
