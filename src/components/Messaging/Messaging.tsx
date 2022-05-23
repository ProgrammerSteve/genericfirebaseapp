import React from 'react';
import './Messaging.css';







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

import { useAppSelector, useAppDispatch } from '../../redux/hooks';




interface Props {}

const Messaging = () => {

    const dispatch=useAppDispatch();
    const profileEmail=useAppSelector((state)=>state.pro.P_Email);
    const profileUsername=useAppSelector((state)=>state.pro.P_Username);
    const profileName=useAppSelector((state)=>state.pro.P_Name);
    const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
    const profileJoined=useAppSelector((state)=>state.pro.P_Joined);
    const profile_uid=useAppSelector((state)=>state.nav.profile_uid);



    return(
        <div>

            <p>{profile_uid}</p>
            <div id="MessagingDiv"></div>



        </div>
    )

}

export default Messaging