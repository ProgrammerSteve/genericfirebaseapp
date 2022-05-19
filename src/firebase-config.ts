// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider 
} from "firebase/auth";
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMODpwUaSyXw0LdpdjjimUD_244DPqxw",
  authDomain: "genericfirebaseapp.firebaseapp.com",
  projectId: "genericfirebaseapp",
  storageBucket: "genericfirebaseapp.appspot.com",
  messagingSenderId: "913045166232",
  appId: "1:913045166232:web:2b3d90714625ab0d1798ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


export const Providers= {
  google: new GoogleAuthProvider(),
}
