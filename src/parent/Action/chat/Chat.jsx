import React from "react";
import "./chat.css";
import Message from "./Message";

const Chat = ({ messages, currentUser }) => {
  return (
    <div className="chatbody">
      {messages.map((message) => (
        <Message message={message} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default Chat;
