import { 
    BrowserRouter as Router, 
    Routes, 
    Route,
    useNavigate,
    Link
  } from 'react-router-dom';


import { 
    Container, 
    Row, 
    Col, 
    Navbar, 
    Nav, 
    Tab, 
    Tabs, 
    Form, 
    Button 
} from 'react-bootstrap';

import {useState} from 'react';
import "./Home.css";

import{getAuth, signOut} from 'firebase/auth';
import {auth} from '../../firebase-utils';

import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/profile/profile';
import Messaging from '../../components/Messaging/Messaging';

import {
    setNavigation,
    setUID,
    setTab,
} from '../../redux/actions/actions-nav';

import{
    setProfileEmail,
    setProfileUsername,
    setProfileName,
    setProfileBirthday,
    setProfileJoined,
  } from '../../redux/actions/actions-pro';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const Home=()=>{
    
    const dispatch=useAppDispatch();
    const tab=useAppSelector((state)=>state.nav.profile_tab);


    const pageSwitcher=()=>{
        switch(tab){
            case "profile":
                return <Profile/>;
            case "messaging":
                return <Messaging/>;       
            case "settings":
                return;           
            default:
                return;
        }
    }


    return(
        <>
            <div id="homePageContainer">
                <NavBar/>
                {pageSwitcher()}
            </div>
        </>
    );
}
export default Home;