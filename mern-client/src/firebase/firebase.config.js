// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYg1tLekxkU3ckkH0dpRUePqF_56YrUa8",
  authDomain: "mern-book-inventory-436cc.firebaseapp.com",
  projectId: "mern-book-inventory-436cc",
  storageBucket: "mern-book-inventory-436cc.appspot.com",
  messagingSenderId: "817863455569",
  appId: "1:817863455569:web:b49f2836d2d5e544e9d970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;