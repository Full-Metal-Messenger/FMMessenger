import { client, parseData } from './client';

export async function createRoom(name) {
  //calling a function that we make on supabase
  const resp = await client.rpc('create_room', { name: name });
  return parseData(resp);
}
