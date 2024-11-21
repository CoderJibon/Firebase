import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAPP } from "./FirebaseAPP.js";

export const auth = getAuth(FirebaseAPP);

export const googleAuth = new GoogleAuthProvider();
