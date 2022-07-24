import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7_OGAlzRyMoploA6L7IWjkwthWxWFZvI",
  authDomain: "loginwith-9fb38.firebaseapp.com",
  projectId: "loginwith-9fb38",
  storageBucket: "loginwith-9fb38.appspot.com",
  messagingSenderId: "997450310725",
  appId: "1:997450310725:web:68cdbbb95db6817ef96f2c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
