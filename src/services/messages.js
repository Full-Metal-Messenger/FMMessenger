import { useAuthContext } from '../context/AuthContext';
import { getUser } from './auth';
import { client, parseData } from './client';

export async function getMessages(id) {
  const resp = await client
    .from('messages')
    .select('*, profiles(username)')
    .match({ room_id: id })
    .order('created_at', { descending: false });
  return parseData(resp);
}

export async function getProfiles() {
  const resp = await client
    .from('profiles')
    .select()
    .order('created_at', { descending: false });
  return parseData(resp);
}

export async function postMessage(post, room_id) {
  const resp = await client
    .from('messages')
    .insert({ posts: post, room_id: room_id });
  return parseData(resp);
}

export async function deleteMessage(id) {
  const resp = await client.from('messages').delete().match({ id });
  return parseData(resp);
}

export async function updateUserName(username) {
  const {
    defaultState: { id },
  } = useAuthContext();

  const resp = await client.from('profiles').update({ username }).match({ id });
  return parseData(resp);
}
// possibly no longer used
// export function unsubscribe() {
//   return client.removeAllSubscriptions();
// }

export async function getProfileById(id) {
  const data = await client.from('profiles').select().match({ id }).single();
  return parseData(data);
}
