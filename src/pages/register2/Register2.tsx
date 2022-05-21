import { Container, Row, Col, Navbar, Nav, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import AuthRoute from '../../components/AuthRoute/AuthRoute';

import{
    createUserWithEmailAndPassword,
}from 'firebase/auth';

import { 
    BrowserRouter as Router, 
    Routes, 
    Route,
    useNavigate,
    Link
  } from 'react-router-dom';
import {auth} from '../../firebase-utils';
import './Register2.css';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import{
    setNavigation,
    setEmail,
    setPass,
    setConfirm,
    setUsername,
    setName,
    setBirthday,
    setJoined,
    resetRegister,
  } from '../../redux/actions';

import {
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth,
    db,   
    IuserAuth,
} from '../../firebase-utils';
import { ErrorCallback } from 'typescript';
import { FirestoreErrorCode } from 'firebase/firestore';

//   const SignUpForm = ()=>{

//     const [formFields,setFormFields]=useState(defaultFormFields);
//     const {displayName, email, password, confirmPassword}= formFields;

//     const restFormFields=()=>{
//         setFormFields(defaultFormFields);
//     }

//     const handleSubmit= async (event)=>{
//         event.preventDefault();
//         if(password!=confirmPassword){
//             alert("passwords do not match");
//             return;
//         }
//         try{
//             const response=await createAuthUserWithEmailAndPassword(email,password);
//             console.log(response);
//             await createUserDocumentFromAuth(response.user, {displayName});
//             restFormFields();

//         }catch(error){
//             if(error.code === 'auth/email-already-in-use'){
//                 alert("Cannot create user, email already in use");
//             }else{
//                console.log('user creation encountered an error',error);
//             }
            
//         }
//     };

const Register2=()=> {

    const dispatch=useAppDispatch();
    const Email=useAppSelector((state)=>state.reg.R_Email);
    const Pass=useAppSelector((state)=>state.reg.R_Pass);
    const Confirm=useAppSelector((state)=>state.reg.R_Confirm);
  
    const Username=useAppSelector((state)=>state.reg.R_Username);
    const Name=useAppSelector((state)=>state.reg.R_Name);
    const Birthday=useAppSelector((state)=>state.reg.R_Birthday);
    const Joined=useAppSelector((state)=>state.reg.R_Joined);

    const navigate= useNavigate();
    const[registering, setRegistering]= useState<boolean>(false);
    const[error, setError]=useState<string>('');

interface Iauth{
    user:IuserAuth;
}

const handleSubmit= async (event:React.SyntheticEvent)=>{
    event.preventDefault();
    if(Pass!=Confirm){
        alert("passwords do not match");
        return;
    }
    try{
        const response:Iauth=await createAuthUserWithEmailAndPassword(Email,Pass);
        console.log(response);
        await createUserDocumentFromAuth(response.user, 
            {
                Username,
                Name,
                Birthday,
            }
        );
        dispatch(resetRegister());
        navigate('/');
    }catch(error:any){

        if(error.code === 'auth/email-already-in-use'){
            console.log("Cannot create user, email already in use");
        }else{
            console.log('user creation encountered an error',error);
        }
    }
};

    return(
        <>        
        <div id='Register2-Bg-Div'>
        <div onClick={()=>navigate('/')}>Home</div>
        <div onClick={()=>navigate('/Login')}>Login</div>
        <div onClick={()=>navigate('/Register')}>Register</div>   
        <div id="Register2-Container">
                <Form onSubmit={handleSubmit}>
                    <h1>Profile Details</h1><br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            onChange={e=>dispatch(setUsername(e.target.value))} 
                        />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Name" 
                            onChange={e=>dispatch(setName(e.target.value))} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Birthday"
                            onChange={e=>dispatch(setBirthday(e.target.value))} 
                        />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Register
                    </Button>
                </Form> 
        </div>

        </div>
        <p>Email: {`${Email}`}  Pass: {`${Pass}`}  Confirm: {`${Confirm}`}</p><br/>
        <p>Username: {`${Username}`}  Name: {`${Name}`}  Birthday: {`${Birthday}`}</p><br/>
        <p>Joined: {`${Joined}`}</p><br/>
        </>
    )

}
export default Register2;