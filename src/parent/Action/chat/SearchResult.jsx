import React, { useEffect, useState } from "react";
import "./searchResult.css";
import {
  collection,
  setDoc,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const SearchResult = ({
  result,
  currentUser,
  setCloseResults,
  closeResults,
}) => {
  const handleClick = async () => {
    let foundBefore = false;

    setCloseResults(!closeResults);
    const chatUserId = result.id;
    const currentUserId = currentUser.id;

    const idArray = [currentUserId, chatUserId].sort();
    const idConcatenated = `${idArray[0]}-${idArray[1]}`;
    const idSplit = idConcatenated.split("-");

    //7I1HXqnyawG3K87MUdTP-7TP9VpkbrHLmDh3STC28

    const q = query(
      collection(db, "userChats"),
      where("userChatID", "==", idConcatenated)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        foundBefore = true;
      }
    } catch (error) {
      console.log("Error getting documents: ", error);
    }

    if (!foundBefore) {
      try {
        const docRef1 = doc(collection(db, "userChats"), idConcatenated);

        await setDoc(docRef1, {
          userOne: currentUser,
          userTwo: result,
          lastMessage: "",
          lastMsgSenderId: "",
          lastMsgTimestamp: "",
          userChatID: idConcatenated,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      try {
        const docRef2 = doc(collection(db, "chats"), idConcatenated);

        await setDoc(docRef2, {
          chatId: idConcatenated,
          messages: [],
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log(
        "will not apply the firebase setDoc function as the chat is already their"
      );
    }
  };
  return (
    <div className="searchResult" onClick={handleClick}>
      <img src={result.photoURL} alt="" />
      <p>{result.name}</p>
    </div>
  );
};

export default SearchResult;
