import React, {useEffect,useState,useCallback, PropsWithChildren} from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
    onAuthStateChanged,
    getAuth,

} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


import{
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    onSnapshot,
    query,where,
    Unsubscribe,
} from 'firebase/firestore';

import {auth,db} from '../.././firebase-utils';



import {
    setNavigation,
    setUID,
} from '../../redux/actions/actions-nav';

import{
    setProfileEmail,
    setProfileUsername,
    setProfileName,
    setProfileBirthday,
    setProfileJoined,
  } from '../../redux/actions/actions-pro';





export interface Props {
    children:React.ReactNode;
    show: boolean;
  }

const AuthRoute: React.FunctionComponent<Props>  = (props) => {
    const {
        show, 
        children,
    }=props;

    const dispatch=useAppDispatch();
    // const profileEmail=useAppSelector((state)=>state.pro.P_Email);
    // const profileUsername=useAppSelector((state)=>state.pro.P_Username);
    // const profileName=useAppSelector((state)=>state.pro.P_Name);
    // const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
    // const profileJoined=useAppSelector((state)=>state.pro.P_Joined);
    // const profile_uid=useAppSelector((state)=>state.nav.profile_uid);




    const navigate=useNavigate();
    const [loading, setLoading]= useState(true);
    const [DATA, setDATA]=useState({});
    const AuthCheck=useCallback(
        ()=>{
            onAuthStateChanged(auth, (user:any)=>{
                // console.log(children);
                if(user || show){
                    setLoading(false)
                    // console.log('AuthRoute: ', user.uid);
                    // const colRef=collection(db,'users');
                    // const q=query(colRef, where("uid","==",user.uid));
                    // const unsubscribe=onSnapshot(q,(snapshot)=>{
                    //     let data:any= [];
                    //     snapshot.docs.forEach((doc)=>{
                    //         data.push({
                    //             ...doc.data(),
                    //             id: doc.id,
                    //         })
                    //     })
                    //     setDATA(DATA=>({...DATA, ...data[0]}));

                        

                    //     // dispatch(setProfileEmail(data[0].email));
                    //     // dispatch(setProfileUsername(data[0].Username));
                    //     // dispatch(setProfileName(data[0].Name));
                    //     // dispatch(setProfileJoined(data[0].Joined));
                    //     // dispatch(setProfileBirthday(data[0].Birthday));
                    //     // dispatch(setUID(data[0].uid));
        
                    // })
                    // console.log(DATA);
                }else{
                    setLoading(true)
                    // console.log('unauthorized')
                    navigate('/Login')
                }
                // return ()=>unsubscribe();
            })
        },[auth]
    )

    useEffect(()=>{
        AuthCheck();
        return ()=>AuthCheck();
    },[AuthCheck])

    if(loading) return<p>Loading...</p>;
    return <>{children}</>

}

export default AuthRoute