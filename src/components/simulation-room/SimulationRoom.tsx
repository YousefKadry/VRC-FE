import React from 'react';
import Sidebar from '../shared/Sidebar/Sidebar';
import Space from './room/room';

const SimulationRoom = () => {
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <Space/>
    </div>
  );
};

export default SimulationRoom;
