import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv__SYXbUYIIrDi5QO7oP7T-jNdNUuhSo",
  authDomain: "blog-test-56a9b.firebaseapp.com",
  projectId: "blog-test-56a9b",
  storageBucket: "blog-test-56a9b.appspot.com",
  messagingSenderId: "86962858672",
  appId: "1:86962858672:web:a0e670451a173c7e85e975",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
