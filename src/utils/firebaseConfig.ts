// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDaiW_AUs6OqZHniq5S2apGJZa5qclX-yc",
  authDomain: "the-deep-nightmare.firebaseapp.com",
  projectId: "the-deep-nightmare",
  storageBucket: "the-deep-nightmare.appspot.com",
  messagingSenderId: "36249542941",
  appId: "1:36249542941:web:2669846af12afd4078c1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)