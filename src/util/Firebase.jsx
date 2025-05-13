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
  apiKey: "AIzaSyAgGaPe3uFqBbllV5EnWDM6jiSZQp11Af0",
  authDomain: "clone-8fcca.firebaseapp.com",
  projectId: "clone-8fcca",
  storageBucket: "clone-8fcca.firebasestorage.app",
  messagingSenderId: "286327511167",
  appId: "1:286327511167:web:89a5d0f4215ee09b65c74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Correct usage of Firestore
