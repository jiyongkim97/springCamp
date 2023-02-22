import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC3ACyU2nhAKHw075d7PKMLIHYYDwgtPd8",
  authDomain: "spring-flower97.firebaseapp.com",
  projectId: "spring-flower97",
  storageBucket: "spring-flower97.appspot.com",
  messagingSenderId: "201278664237",
  appId: "1:201278664237:web:164d0121799a48734d12a4",
  measurementId: "G-R8NB05PXG1"
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth()
const analytics = getAnalytics(app);
export default app;
export const dbService = getFirestore();