import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

// firestore is the database for firebase
import{
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    onSnapshot,
    query,where,
} from 'firebase/firestore';

// import * as firebase from "firebase/app";
// import {app} from './firebase-config';

import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect,
    createUserWithEmailAndPassword,
    Auth,
} from 'firebase/auth';
import { isAnyOf } from '@reduxjs/toolkit';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();
export const auth = getAuth();

export interface IUserAuth {
    id: string;
    displayName: string;
    email: string;
    createdAt: Date;
  }

//Provider
const provider= new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

//native email and password is built into firebase and doesn't need
//a provider, only the method createUserWithEmailAndPassword
//createUserWithEmailAndPassword is async
export const createAuthUserWithEmailAndPassword= async (email:string, password:string):Promise<any> =>{
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

//signInWithGooglePopup
export const signInWithGooglePopup=()=>{
    return signInWithPopup(auth, provider);
}
//signInWithGoogleRedirect
export const signInWithGoogleRedirect=()=>{
    return signInWithRedirect(auth,provider);
}

export interface IuserAuth{
    uid: string;
    displayName:string;
    email:string;
}

export const createUserDocumentFromAuth = async (userAuth:IuserAuth, additionalInformation={})=>{
    if(typeof(userAuth)==="object"){
        const userDocRef=doc(db, 'users',userAuth.uid);
        console.log('userDocRef:',userDocRef);
        const userSnapshot= await getDoc(userDocRef);
        // console.log(userSnapshot);
        // console.log(userSnapshot.exists());
        
        //checks if user doesn't exist
        //if user does exist on the database this code is ignored
        //if it doesn't exist, name,email and date is inputted
        //into the database using the setDoc() function
        //setDoc() is async, takes 2 inputs, the ref and the data object to send
        if(!userSnapshot.exists()){
            const{displayName, email, uid}=userAuth;
            const createdAt = new Date();
            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    uid,
                    ...additionalInformation,
                });
            }catch(error){
                console.log('error creating user');
            }
        }
    }else{
        console.log('Auth not found');
    }
    // return userDocRef;
}








// const colRef=collection(db,'users')
// getDocs(colRef).then((snapshot)=>{
//     console.log(snapshot.docs)
//     let data:any= [];
//     snapshot.docs.forEach((doc)=>{
//         data.push({
//             ...doc.data(),
//             id: doc.id,
//         })
//     })
//     console.log(data);
// })

// const getProfileData=(auth:any)=>{
//     const userDocRef=doc(db, 'users',auth.uid);
//     console.log('userDocRef:',userDocRef);
// }
// getProfileData(auth);
















// const getProfileRef=(auth:any)=>{
//     const colRef=collection(db,'users');
//     const q=query(colRef, where("uid","==",auth.uid));
//     return q;
// }




// const colRef=collection(db,'users');
// const q=query(colRef, where("uid","==",auth.uid));
// onSnapshot(getProfileRef(auth),(snapshot)=>{
//     let data:any= [];
//     snapshot.docs.forEach((doc)=>{
//         data.push({
//             ...doc.data(),
//             id: doc.id,
//         })
//     })
//     console.log("Data Retrieved: ",data);
// })