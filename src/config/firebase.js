import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8GKp3hc2ojQojCsk0Cmk3LbzvjuN48wU",
  authDomain: "pokedex-1e1a4.firebaseapp.com",
  projectId: "pokedex-1e1a4",
  storageBucket: "pokedex-1e1a4.appspot.com",
  messagingSenderId: "446936690936",
  appId: "1:446936690936:web:1a1dd21dcf0162c947cb0d",
  measurementId: "G-6B0S8SC50J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
