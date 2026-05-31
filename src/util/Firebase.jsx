// import { initializeApp } from "firebase/app";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAgGaPe3uFqBbllV5EnWDM6jiSZQp11Af0",
//   authDomain: "clone-8fcca.firebaseapp.com",
//   projectId: "clone-8fcca",
//   storageBucket: "clone-8fcca.firebasestorage.app",
//   messagingSenderId: "286327511167",
//   appId: "1:286327511167:web:89a5d0f4215ee09b65c74a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Update this import
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Correct usage of Firestore
