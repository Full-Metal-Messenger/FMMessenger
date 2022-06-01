import { client, parseData } from './client';

export async function createRoom(name) {
  const resp = await client
    .from('rooms')
    .insert({ name: name }, { returning: 'minimal' });
  console.log('resp', resp);
  return parseData(resp);
}
