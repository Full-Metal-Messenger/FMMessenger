import { Image } from '@chakra-ui/react';
import React from 'react';
import AddTooRoomPop from '../components/AddTooRoomPop';
import Header from '../components/Header';

function Landing() {
  return (
    <div>
      <Header />
      <h1>welcome to FullMetalMessenger</h1>
      {/* <img src={`${process.env.PUBLIC_URL}/tome.jpeg`} /> */}
      <AddTooRoomPop />
    </div>
  );
}

export default Landing;
