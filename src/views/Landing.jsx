import React from 'react';
import Header from '../components/Header';
import RoomsList from '../components/RoomsList';

function Landing() {
  return (
    <div>
      <Header />
      <h1>welcome to FullMetalMessenger</h1>
      <RoomsList />
    </div>
  );
}

export default Landing;
