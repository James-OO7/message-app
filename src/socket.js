import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export const sendMessage = (message) => {
  socket.emit('chatMessage', message);
};

export const subscribeToMessages = (callback) => {
  socket.on('chatMessage', (message) => {
    callback(message);
  });
};

export const unsubscribeFromMessages = () => {
  socket.off('chatMessage');
};

export default socket;