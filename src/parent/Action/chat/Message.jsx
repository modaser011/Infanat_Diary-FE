import React from "react";
import "./message.css";

const Message = ({ message, currentUser }) => {
  return (
    <>
      {message.imageURL !== "" ? (
        <img
          className={
            message.senderId === currentUser.id
              ? "myMessage__Img"
              : "message__Img"
          }
          src={message.imageURL}
          alt="firebase img"
        />
      ) : (
        <div
          className={
            message.senderId === currentUser.id ? "myMessage" : "message"
          }
        >
          {message.messageBody}
        </div>
      )}
    </>
  );
};

export default Message;
