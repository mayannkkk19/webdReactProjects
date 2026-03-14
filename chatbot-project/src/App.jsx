import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import  ChatMessages from "./components/ChatMessages";
import "./App.css";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";


function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello chatbot", sender: "user", id: "id1" },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Flip a coin",
      sender: "user",
      id: "id3",
    },
    {
      message: "Sure! You got heads",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
export default App;
