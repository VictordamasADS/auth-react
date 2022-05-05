import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoUkDxHw4Hl591OYRAz8e8CGKDB4xD1R8",
  authDomain: "db-teste-d0980.firebaseapp.com",
  projectId: "db-teste-d0980",
  storageBucket: "db-teste-d0980.appspot.com",
  messagingSenderId: "971316891098",
  appId: "1:971316891098:web:ddf7e2dd22712efcf884e3",
  measurementId: "G-Q6H6ZLF9MK"
};

const firebaseApp = initializeApp(firebaseConfig);
export const authenticationApp = getAuth(firebaseApp);
