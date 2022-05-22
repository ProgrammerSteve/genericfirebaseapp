import React, {useState, useEffect} from 'react'


import './profile.css';
import { 
    Container, 
    Row, 
    Col, 
} from 'react-bootstrap';


interface Props {}

const Profile = () => {


    

  const [url, setUrl ]= useState('https://firebasestorage.googleapis.com/v0/b/genericfirebaseapp.appspot.com/o/nopic.jpg?alt=media&token=7a413bc0-6f90-4af6-937d-2e78f24d23c1');








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
                        <Col>null</Col>
                    </Row>
                    <Row>
                        <Col>Name:</Col>
                        <Col>null</Col>
                    </Row>
                    <Row>
                        <Col>Email:</Col>
                        <Col>null</Col>
                    </Row>
                    <Row>
                        <Col>Joined:</Col>
                        <Col>null</Col>
                    </Row>     
                    <Row>
                        <Col>Birthday:</Col>
                        <Col>null</Col>
                    </Row>                 
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profile;