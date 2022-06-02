import { Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageContext } from '../context/MessageContext';
import { client } from '../services/client';
import { getRoomId } from '../services/rooms';

function RoomsList() {
  const { loading, setLoading } = useContext(MessageContext);
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { body } = await client.from('rooms').select();
      setRoom(body);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/21649a82-c86b-4b10-a230-f4f20bdfd5fa">Main</Link>
      {loading ? (
        <p>loading</p>
      ) : (
        room?.map(({ id, name }) => (
          <Text key={id}>
            <Link to={`/${id}`}>{name}</Link>
          </Text>
        ))
      )}
    </div>
  );
}

export default RoomsList;
