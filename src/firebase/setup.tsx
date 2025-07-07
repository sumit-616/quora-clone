import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDBml5YSGEOPjDFshmNPK-5tBLodYbiSEA",
  authDomain: "quora-clone-1c31c.firebaseapp.com",
  projectId: "quora-clone-1c31c",
  storageBucket: "quora-clone-1c31c.firebasestorage.app",
  messagingSenderId: "10115864271",
  appId: "1:10115864271:web:d6c99b9b6ad83ac66009ba",
  measurementId: "G-JMDDX4ZBSY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)
