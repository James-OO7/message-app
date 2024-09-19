import React from 'react';
import '../styles/ChatMessage.css';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <strong>{message.user}:</strong> {message.text}
    </div>
  );
};

export default ChatMessage;