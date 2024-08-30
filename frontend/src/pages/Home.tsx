import React, { useState } from 'react';
import { useSocket } from '../providers/Socket';

const Homepage: React.FC = () => {
  const { socket } = useSocket();
  const [email, setEmail] = useState('');
  const [roomID, setRoomID] = useState('');

  const handleEnterRoom = () => {
    if (socket && email && roomID) {
      socket.emit('join-room', { emailID: email, roomID });
    } else {
      alert('Please enter a valid email and room code.');
    }
  };

  return (
    <div className='homepage-container'>
      <div>
        <input
          className='border'
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border'
          type='text'
          placeholder='Enter room code'
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
        />
        <button className='border' onClick={handleEnterRoom}>
          Enter room
        </button>
      </div>
    </div>
  );
};

export default Homepage;
