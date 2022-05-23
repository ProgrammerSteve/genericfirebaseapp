import React, { ReactNode } from 'react';
import './Messaging.css';



import {db} from '../../firebase-utils';
import{
    collection,
    query,
    where,
    onSnapshot,
    doc,
} from 'firebase/firestore';



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
    setProfileMessages,
  } from '../../redux/actions/actions-pro';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';







interface Props {}

const Messaging = () => {

    const dispatch=useAppDispatch();
    const profileEmail=useAppSelector((state)=>state.pro.P_Email);
    const profileUsername=useAppSelector((state)=>state.pro.P_Username);
    const profileName=useAppSelector((state)=>state.pro.P_Name);
    const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
    const profileJoined=useAppSelector((state)=>state.pro.P_Joined);


    const profileMessages=useAppSelector((state)=>state.pro.P_Messages);

    const profile_uid=useAppSelector((state)=>state.nav.profile_uid);



    // const MessageList:any=()=>{
    //     const messageRef=collection(db,'messages');
    //     const messageq=query(messageRef, where("uid","==",profile_uid));
        
    //     const unsubscribe = onSnapshot(messageq,(snapshot:any)=>{
    //         const data:any= [];
    //         snapshot.forEach((doc:any)=>{
    //             data.push(doc.data());
    //         }) 
    //         // console.log('data: ',data);
            
    //     })
    //     // dispatch(setProfileMessages(data));
    // }




    return(
        <div>

            
            <div id="MessagingDiv">
                <p>{profile_uid}</p><br/>
                <p>Under Construction</p>
                <div id="MessageContainer">
                    {/* {MessageList()} */}
                </div>
            </div>



        </div>
    )

}

export default Messaging