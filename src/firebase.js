import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA9bVn6-LSIx-Hb_Kyr0PINvAfLwAxC-Ug",
  authDomain: "funding-web.firebaseapp.com",
  projectId: "funding-web",
  storageBucket: "funding-web.appspot.com",
  messagingSenderId: "949690517379",
  appId: "1:949690517379:web:ac730c3a74410f77f258b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()