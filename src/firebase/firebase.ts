// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmbWO61PE0e_q99jnNPgvHIf3dPOn3tPY",
  authDomain: "recruitment-e8388.firebaseapp.com",
  projectId: "recruitment-e8388",
  storageBucket: "recruitment-e8388.appspot.com",
  messagingSenderId: "73345114261",
  appId: "1:73345114261:web:8fea495cfe5296d9987b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
