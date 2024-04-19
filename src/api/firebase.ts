import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEwcvhiu_XgueDrEsAYtWdS07i1SNgzrA",
  authDomain: "byhand-bf149.firebaseapp.com",
  projectId: "byhand-bf149",
  storageBucket: "byhand-bf149.appspot.com",
  messagingSenderId: "326598579118",
  appId: "1:326598579118:web:36b1ee64a124ff43262e3f",
  measurementId: "G-8YWLCWEX90",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
