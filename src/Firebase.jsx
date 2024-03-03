// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGLcAoSvGMYDDM2gFH0-URs-KE0nYWabc",
  authDomain: "task1-d81b1.firebaseapp.com",
  projectId: "task1-d81b1",
  storageBucket: "task1-d81b1.appspot.com",
  messagingSenderId: "382375140282",
  appId: "1:382375140282:web:afc461a27a687e9e191b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);