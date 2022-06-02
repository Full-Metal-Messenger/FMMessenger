import { client, parseData } from './client';

export async function createRoom(name) {
  //calling a function that we make on supabase
  const resp = await client.rpc('create_room', { name: name }).single();
  console.log('respCreate', resp);
  return parseData(resp);
}

export async function getRoomId() {
  const { body } = await client.from('rooms').select().single();

  console.log('this', body);
  return parseData(body);
}
