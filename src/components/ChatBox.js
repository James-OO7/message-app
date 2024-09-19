import React from 'react';
import '../styles/ChatBox.css';
import ChatMessage from '../components/ChatMessage';

const ChatBox = ({ chat }) => {
  return (
    <div className="chat-box">
      {chat.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatBox;
