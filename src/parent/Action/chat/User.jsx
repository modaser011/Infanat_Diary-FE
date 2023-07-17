import React from "react";
import "./user.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const User = ({
  image,
  name,
  lastMessage,
  timestamp,
  setCurrentChat,
  chatId,
  setCurrentUserChat,
}) => {
  const handleSelectChat = async () => {
    const docRef = doc(db, "chats", chatId);
    const docSnap = await getDoc(docRef);

    const decRef2 = doc(db, "userChats", chatId);
    const docSnap2 = await getDoc(decRef2);

    setCurrentChat(docSnap.data());
    setCurrentUserChat(docSnap2.data());
  };

  return (
    <div className="chatUser" onClick={handleSelectChat}>
      {image && <img src={image} className="chatUser__image" alt="doctor" />}
      <div className="chatUser__details">
        <span>
          <strong>{name}</strong>
        </span>
        <span className="chatUser__message">
          {lastMessage}
          <span className="chatUser__timestamp">{timestamp}</span>
        </span>
      </div>
    </div>
  );
};

export default User;
