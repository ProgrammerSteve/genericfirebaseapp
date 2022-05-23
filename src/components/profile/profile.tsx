import React, {useState, useEffect} from 'react'


import './profile.css';
import { 
    Container, 
    Row, 
    Col, 
} from 'react-bootstrap';


import{
    setProfileEmail,
    setProfileUsername,
    setProfileName,
    setProfileBirthday,
    setProfileJoined,
  } from '../../redux/actions/actions-pro';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';


interface Props {}

const Profile = () => {


    

  const [url, setUrl ]= useState('https://firebasestorage.googleapis.com/v0/b/genericfirebaseapp.appspot.com/o/nopic.jpg?alt=media&token=7a413bc0-6f90-4af6-937d-2e78f24d23c1');



  const dispatch=useAppDispatch();
  const profileEmail=useAppSelector((state)=>state.pro.P_Email);
  const profileUsername=useAppSelector((state)=>state.pro.P_Username);
  const profileName=useAppSelector((state)=>state.pro.P_Name);
  const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
  const profileJoined=useAppSelector((state)=>state.pro.P_Joined);





  return( 
    <div>
    
        <div id="img-Div">
            <img id="profile-pic" src={`${url}`}/> 
            <svg id="profile-pic-btn">
                <circle id="svg-circle" cx="50%" cy="50%" r="45%"/>
            </svg>
        </div>

<br/>
<br/>
<div  style={{marginInline:'auto'}}><h1>Profile</h1></div>

    <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>Username:</Col>
                        <Col>{profileUsername}</Col>
                    </Row>
                    <Row>
                        <Col>Name:</Col>
                        <Col>{profileName}</Col>
                    </Row>
                    <Row>
                        <Col>Email:</Col>
                        <Col>{profileEmail}</Col>
                    </Row>
                    <Row>
                        <Col>Joined:</Col>
                        <Col>{profileJoined}</Col>
                    </Row>     
                    <Row>
                        <Col>Birthday:</Col>
                        <Col>{profileBirthday}</Col>
                    </Row>                 
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profile;