// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAhwWJ5J_RoGyOZ2ypw0_JaUA8bIabAG4g",
    authDomain: "talk-a-tive-46d0d.firebaseapp.com",
    projectId: "talk-a-tive-46d0d",
    storageBucket: "talk-a-tive-46d0d.appspot.com",
    messagingSenderId: "834059149024",
    appId: "1:834059149024:web:056cbaef2e695fc5dc3a85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()