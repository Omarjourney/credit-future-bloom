import React, { useState } from 'react';

interface Message {
  from: 'user' | 'assistant';
  text: string;
}

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage: Message = { from: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Placeholder for AI API call
    // In a real app, you would POST to your backend which communicates with an LLM
    const reply = 'This is a placeholder AI response.';
    const assistantMessage: Message = { from: 'assistant', text: reply };
    setMessages(prev => [...prev, assistantMessage]);
  };

  return (
    <div className="chat-assistant">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatAssistant;
