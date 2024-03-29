import { client, parseData } from './client';

export async function createRoom(name) {
  const resp = await client.rpc('create_room', { name: name }).single();
  return parseData(resp);
}

export async function getRoomId() {
  const { body } = await client.from('rooms').select();

  return parseData(body);
}
export async function getRoomById(id) {
  const body = await client.from('rooms').select().match({ id }).single();
  parseData(body);
}

export async function addToRoom(room_id, profile_id) {
  const resp = await client
    .from('rooms_participants')
    .insert({ room_id: room_id, profile_id: profile_id })
    .single();
  return parseData(resp);
}
