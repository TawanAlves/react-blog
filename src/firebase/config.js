// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiErCL2uKMCuSPIW3OL57wp8gom8gVlUc",
  authDomain: "tineblog-5518c.firebaseapp.com",
  projectId: "tineblog-5518c",
  storageBucket: "tineblog-5518c.appspot.com",
  messagingSenderId: "895051100483",
  appId: "1:895051100483:web:05f424442142271c947ff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
