import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessageByPressingEnter(event) {
    if (event.key === "Enter") {
      setInputText(event.target.value);
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  async function sendMessage() {
    const messageToSend = inputText;
    const currentMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    const loadingMessage = [
      ...currentMessage,
      {
        message: 'Loading...',
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(loadingMessage);
    
    setInputText("");

    const response = await(Chatbot.getResponseAsync(messageToSend));
    setChatMessages([
      ...currentMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-message-input"
        onChange={saveInputText}
        onKeyDown={sendMessageByPressingEnter}
        placeholder="Send a message to Chatbot"
        width="30"
        value={inputText}
      />
      <button className="send-message-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}