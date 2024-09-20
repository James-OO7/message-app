// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import { sendMessage, subscribeToMessages, subscribeToChatHistory, unsubscribeFromMessages } from './socket';

function App() {
  const [chat, setChat] = useState([]);
  const [username, setUsername] = useState('');
  const [isUserSet, setIsUserSet] = useState(false); // Manage whether the user has set their username

  useEffect(() => {
    subscribeToMessages((message) => {
      setChat((prevChat) => [...prevChat, message]);
    });

    subscribeToChatHistory((history) => {
      setChat(history);
    });

    return () => unsubscribeFromMessages();
  }, []);

  const handleSetUsername = () => {
    if (username.trim()) {
      setIsUserSet(true);
    }
  };

  return (
    <div className="App">
      <h2>James Chat</h2>
      {!isUserSet ? (
        <div className="username-container">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSetUsername}>Join Chat</button>
        </div>
      ) : (
        <>
          <ChatBox chat={chat} />
          <ChatInput sendMessage={(msg) => sendMessage({ user: username, text: msg })} />
        </>
      )}
    </div>
  );
}

export default App;
