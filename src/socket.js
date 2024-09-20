import { io } from 'socket.io-client';

const socket = io('https://james-chat-backend.onrender.com');

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