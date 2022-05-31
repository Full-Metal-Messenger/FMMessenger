import React from 'react';
import useProfiles from '../hooks/useProfiles/useProfiles';

export default function Profiles() {
  const { person } = useProfiles();
  return (
    <div>
      {person.map((item) => (
        <h1 key={item.id}>{item.username}</h1>
      ))}
    </div>
  );
}
