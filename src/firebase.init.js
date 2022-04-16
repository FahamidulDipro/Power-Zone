// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC95B8HFIMK3yMyTk8hH5T2gQgN6M6ljt8",
  authDomain: "power-zone-fd8c1.firebaseapp.com",
  projectId: "power-zone-fd8c1",
  storageBucket: "power-zone-fd8c1.appspot.com",
  messagingSenderId: "657021519335",
  appId: "1:657021519335:web:ddcb5ceeb24f5726ade942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;