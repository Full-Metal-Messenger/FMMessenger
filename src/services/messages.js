import { client, parseData } from './client';

export async function getMessages() {
  const resp = await client
    .from('messages')
    .select('*, profiles(username)')
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

export async function postMessage(post) {
  const resp = await client.from('messages').insert({ posts: post });
  return parseData(resp);
}

// export function subscribe(onPost = (_post) => {}) {
//   const resp = client
//     .from('messages')
//     .on('INSERT', (message) => {
//       onPost(message.new);
//     })
//     .subscribe();
//   return resp;
// }

export function unsubscribe() {
  return client.removeAllSubscriptions();
}
