import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBYGXIsPMUymRHl5gNMEWwlqvUQ3YIi2ZI",
  authDomain: "ecommersebona.firebaseapp.com",
  projectId: "ecommersebona",
  storageBucket: "ecommersebona.appspot.com",
  messagingSenderId: "455809207646",
  appId: "1:455809207646:web:49cb1fe804e0ebeffa93cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)