import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgMFZoeCLyyWMaORS4QbsD2afra4RpFPk",
  authDomain: "mern-stack-44131.firebaseapp.com",
  projectId: "mern-stack-44131",
  storageBucket: "mern-stack-44131.appspot.com",
  messagingSenderId: "220206282303",
  appId: "1:220206282303:web:395bd8edd337dc303b2a8a",
  measurementId: "G-H8XFWQYTN1",
};

// Initialize Firebase
export const FirebaseAPP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseAPP);
export const storage = getStorage(FirebaseAPP);
