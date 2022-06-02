import { client, parseData } from './client';

export async function createRoom(name) {
  //calling a function that we make on supabase
  const resp = await client.rpc('create_room', { name: name }).single();
  console.log('respCreate', resp);
  return parseData(resp);
}

export async function getRoomId() {
  const { body } = await client.from('rooms').select();

  console.log('this', body);
  return parseData(body);
}

export async function addToRoom(room_id, profile_id) {
  const resp = await client
    .from('rooms_participants')
    .insert({ room_id: room_id, profile_id: profile_id })
    .single();
  console.log('resp for insert', resp);
  return parseData(resp);
}
