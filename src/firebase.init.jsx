// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfuCV2bqZry25Xz_But0WgPcbuaHts3g",
  authDomain: "pc-monkey.firebaseapp.com",
  projectId: "pc-monkey",
  storageBucket: "pc-monkey.appspot.com",
  messagingSenderId: "244629996492",
  appId: "1:244629996492:web:dbe470010710bba8325369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;