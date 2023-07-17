// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiYGsQsraMjSqFeYzQbnv0lAmuFCh1QBE",
  authDomain: "infant-diary.firebaseapp.com",
  projectId: "infant-diary",
  storageBucket: "infant-diary.appspot.com",
  messagingSenderId: "997726529374",
  appId: "1:997726529374:web:bb0db1e93f63beb34151cf",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };
