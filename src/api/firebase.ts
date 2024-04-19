import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAkvI_GtfMNKURWquMX_VozlmRuWfDv5w",
  authDomain: "by-hand-3b796.firebaseapp.com",
  projectId: "by-hand-3b796",
  storageBucket: "by-hand-3b796.appspot.com",
  messagingSenderId: "943145730928",
  appId: "1:943145730928:web:99c3951ce13360104505b5",
  measurementId: "G-L42RZ0Q3S3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
