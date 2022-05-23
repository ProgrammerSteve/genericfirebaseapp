import React from 'react'
import {auth} from '../../firebase-utils';
import {signOut} from 'firebase/auth';
import './NavBar.css';


import{
    setProfileEmail,
    setProfileUsername,
    setProfileName,
    setProfileBirthday,
    setProfileJoined,
} from '../../redux/actions/actions-pro';


import {
    setNavigation,
    setUID,
    setTab,
} from '../../redux/actions/actions-nav';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';



interface Props {}

const NavBar = () => {
    const dispatch=useAppDispatch();
    const profileEmail=useAppSelector((state)=>state.pro.P_Email);
    const profileUsername=useAppSelector((state)=>state.pro.P_Username);
    const profileName=useAppSelector((state)=>state.pro.P_Name);
    const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
    const profileJoined=useAppSelector((state)=>state.pro.P_Joined);

    const tab=useAppSelector((state)=>state.nav.profile_tab);
  
  return(

        <div
            id="homeNav"
        >
            <div id="navBtns">
                <div 
                    id="profile"
                    onClick={()=>
                        {
                            dispatch(setTab("profile"));
                        }
                    }
                >
                    Profile
                </div>
                <div 
                    id="messages"
                    onClick={()=>
                        {
                            dispatch(setTab("messaging"));
                        }
                    }
                >
                    Messages
                </div>
                <div 
                    id="settings"
                    onClick={()=>
                        {
                            dispatch(setTab("settings"));
                        }
                    }
                >
                    Settings
                </div>                



            </div>

            <div
                id="signout"
                onClick={()=>{
                    console.log("Logging Out...");
                    dispatch(setProfileEmail(""));
                    dispatch(setProfileUsername(""));
                    dispatch(setProfileName(""));
                    dispatch(setProfileJoined(""));
                    dispatch(setProfileBirthday(""));
                    dispatch(setTab("profile"));

                    signOut(auth);
                    console.log("Signed Out..");
                }}
            >
                Signout
            </div>
        </div>
        )
}

export default NavBar