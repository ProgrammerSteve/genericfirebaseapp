// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider 
} from "firebase/auth";


//firestore is the database for firebase
import{
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'


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













//instantiated the firestore database
export const db=getFirestore();

//receives a userAuthentication object, a function that takes the
//data from userAuth and stores it on the database
//doc() takes 3 inputs, the database, the collection name, and the entry
//the doc() function creates a ref to the database
//each user object has a key uid for unique ID
//getDoc() is async, gets the data for a ref created by doc()
//when making an entry with createAuthUserWithEmailAndPassword
//the display name isn't passed with the userAuth object
//the additionalInformation object and object spreader is used to account for this
//display name will be sent with additionalInformation and overwrite the docRef
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={})=>{
    const userDocRef=doc(db, 'users',userAuth.uid);
    console.log('userDocRef:',userDocRef);

    const userSnapshot= await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    //checks if user doesn't exist
    //if user does exist on the database this code is ignored
    //if it doesn't exist, name,email and date is inputted
    //into the database using the setDoc() function
    //setDoc() is async, takes 2 inputs, the ref and the data object to send
    if(!userSnapshot.exists()){
        const{displayName, email}=userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}