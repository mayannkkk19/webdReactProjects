import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import  ChatMessages from "./components/ChatMessages";
import "./App.css";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";


function App() {
  const [chatMessages, setChatMessages] = useState([]);

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
