import React from 'react'
import {auth} from '../../firebase-config';
import {signOut} from 'firebase/auth';
import './NavBar.css';

interface Props {}

const NavBar = () => {
  return(

        <div
            id="homeNav"
        >
            <div id="navBtns">
                <div id="profile">Profile</div>
                <div id="messages">Messages</div>
                <div id="settings">Settings</div>
            </div>

            <div
                id="signout"
                onClick={()=>{
                    console.log("Logging Out...");
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