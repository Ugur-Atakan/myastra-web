import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9UoczrFOBn9PgArNJDFoMMRaNOBfU6C4",
  authDomain: "myastra-ai-bc.firebaseapp.com",
  projectId: "myastra-ai-bc",
  storageBucket: "myastra-ai-bc.appspot.com",
  messagingSenderId: "492276285875",
  appId: "1:492276285875:web:d80b95fbb24781474f4bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);