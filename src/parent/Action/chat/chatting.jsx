import React, { useState } from "react";
import "./chatting.css";
import SearchIcon from "../../../assets/search-icon.png";
import User from "./User";
import Chat from "./Chat";
import Attach from "../../../assets/attach.png";
import {
  collection,
  query,
  where,
  getDocs,
  or,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect } from "react";
import SearchResults from "./SearchResults";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Chatting = ({ myUser }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chatResults, setChatResults] = useState([]);
  const [closeResults, setCloseResults] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentUserChat, setCurrentUserChat] = useState(null);
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const storedObject = JSON.parse(localStorage.getItem("currentUser"));

  const currentUser = storedObject;

  // const currentUser = {
  //   name: "mohamed medhat",
  //   photoURL: "https://cdn-icons-png.flaticon.com/512/1021/1021566.png",
  //   email: "mohamed.medhat2010@hotmail.com",
  //   role: "doctor",
  //   id: "64a340c44a2fb30851133857",
  // };

  useEffect(() => {
    const q = query(
      collection(db, "userChats"),
      or(
        where("userOne.id", "==", currentUser.id),
        where("userTwo.id", "==", currentUser.id)
      )
    );
    onSnapshot(q, (querySnapshot) => {
      const chatsArray = [];
      querySnapshot.forEach((doc) => {
        chatsArray.push(doc.data());
      });
      chatsArray.sort(
        (a, b) => b.lastMsgFormalTimestamp - a.lastMsgFormalTimestamp
      );
      setChatResults(chatsArray);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentUserChat !== null) {
      onSnapshot(
        doc(db, "chats", currentUserChat?.userChatID),
        (documentSnapshot) => {
          setChatMessages(documentSnapshot.data().messages);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserChat]);

  useEffect(() => {
    const manageLastMsg = async () => {
      const userChatRef = doc(db, "userChats", currentUserChat?.userChatID);
      await updateDoc(userChatRef, {
        lastMessage:
          chatMessages.length > 0
            ? chatMessages[chatMessages.length - 1].imageURL !== ""
              ? chatMessages[chatMessages.length - 1].senderId ===
                currentUser.id
                ? "You: image"
                : "image"
              : chatMessages[chatMessages.length - 1].senderId ===
                currentUser.id
              ? `You: ${chatMessages[chatMessages.length - 1].messageBody}`
              : chatMessages[chatMessages.length - 1].messageBody
            : "(Didn't chat before)",
        lastMsgSenderId: chatMessages.length > 0 ? currentUser.id : "",
        lastMsgTimestamp:
          chatMessages.length > 0
            ? chatMessages[chatMessages.length - 1].timestamp
            : "",
        lastMsgFormalTimestamp:
          chatMessages.length > 0
            ? chatMessages[chatMessages.length - 1].formalTimestamp
            : "",
      });
    };
    manageLastMsg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatMessages]);

  const handleSubmit = async (e) => {
    setCloseResults(false);
    e.preventDefault();
    const q = query(
      collection(db, "users"),
      where("name", "==", search),
      where("role", "==", "doctor")
    );
    setSearch("");
    try {
      const querySnapshot = await getDocs(q);
      const searchResultsArray = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== currentUser.id) {
          const dataWithID = { ...doc.data(), id: doc.id };
          searchResultsArray.push(dataWithID);
        }
      });
      setSearchResults(searchResultsArray);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  };

  const handleSendingText = async () => {
    // console.log(
    //   "You sent a message to chat with ID: ",
    //   currentUserChat?.userChatID
    // );
    if (text !== 0 || image !== null) {
      let url = "";
      if (image !== null) {
        const storageRef = ref(storage, image.name);
        const uploadTask = await uploadBytes(storageRef, image);
        url = await getDownloadURL(uploadTask.ref);
      }
      const chatRef = doc(db, "chats", currentUserChat?.userChatID);
      const currentdate = new Date();
      const formalDate = Math.floor(currentdate.getTime() / 1000);
      const datetime =
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();

      await updateDoc(chatRef, {
        messages: arrayUnion({
          messageBody: text !== "" && text,
          senderId: currentUser.id,
          imageURL: url !== "" ? url : "",
          timestamp: datetime,
          formalTimestamp: formalDate,
          seenByOtherUser: false,
        }),
      });
      setText("");
      setImage(null);
    }
  };

  return (
    <div className="chat">
      <div className="chat__left">
        <form action="" onSubmit={handleSubmit}>
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {searchResults.length > 0 && !closeResults && (
          <SearchResults
            results={searchResults}
            setCloseResults={setCloseResults}
            closeResults={closeResults}
            currentUser={currentUser}
          />
        )}
        {chatResults.length > 0 ? (
          chatResults.map((chatResult) => (
            <User
              image={
                currentUser.id === chatResult.userOne.id
                  ? chatResult.userTwo.photoURL
                  : chatResult.userOne.photoURL
              }
              name={
                currentUser.id === chatResult.userOne.id
                  ? chatResult.userTwo.name
                  : chatResult.userOne.name
              }
              lastMessage={
                chatResult.lastMessage === ""
                  ? "(Didn't chat before)"
                  : chatResult.lastMessage
              }
              timestamp={chatResult.lastMsgTimestamp}
              key={chatResult.userChatID}
              chatId={chatResult.userChatID}
              setCurrentChat={setCurrentChat}
              setCurrentUserChat={setCurrentUserChat}
            />
          ))
        ) : (
          <p style={{ marginTop: "1rem" }}>You have no chats</p>
        )}
      </div>
      <div className="chat__right">
        <div className="chat__rightHeader">
          {currentUserChat === null ? (
            ""
          ) : currentUser.id === currentUserChat.userOne.id ? (
            <img src={currentUserChat.userTwo.photoURL} alt="" />
          ) : (
            <img src={currentUserChat.userOne.photoURL} alt="" />
          )}
          {currentUserChat === null ? (
            <span style={{ marginLeft: "1rem" }}>choose a chat first...</span>
          ) : currentUser.id === currentUserChat.userOne.id ? (
            <span>{currentUserChat.userTwo.name}</span>
          ) : (
            <span>{currentUserChat.userOne.name}</span>
          )}
        </div>
        {chatMessages.length > 0 ? (
          <Chat messages={chatMessages} currentUser={currentUser} />
        ) : (
          <div className="chatbody">no chat done</div>
        )}
        <div className="chat__rightInput">
          <input
            type="text"
            placeholder="Type a message"
            className="chat__rightInputMessage"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            style={{ display: "none" }}
            id="file"
          />
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img src={Attach} alt="" />
          </label>
          <button onClick={handleSendingText}>
            {image ? "Send image" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
