import { Container, Row, Col, Navbar, Nav, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

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
import './Register.css';




import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import{
    setNavigation,
    setEmail,
    setPass,
    setConfirm,
    setUsername,
    setName,
    setBirthday,
    setJoined
  } from '../../redux/actions';






const Register=()=> {

    const handleRegister=async()=>{
        if(Pass!==Confirm){
            console.log('Passwords do not match...')
            
        }else{
            try{
                const user= await createUserWithEmailAndPassword(auth,Email,Pass);
            }catch(e){
                console.log(e);
            }
        } 
    }


    const navigate= useNavigate();


    const[registering, setRegistering]= useState<boolean>(false);
    const[error, setError]=useState<string>('');
    // const[Email,setEmail]=useState<string>('');
    // const[Pass,setPass]=useState<string>('');
    // const[Confirm,setConfirm]=useState<string>('');


    const dispatch=useAppDispatch();
    const Email=useAppSelector((state)=>state.reg.R_Email);
    const Pass=useAppSelector((state)=>state.reg.R_Pass);
    const Confirm=useAppSelector((state)=>state.reg.R_Confirm);

    const Username=useAppSelector((state)=>state.reg.R_Username);
    const Name=useAppSelector((state)=>state.reg.R_Name);
    const Birthday=useAppSelector((state)=>state.reg.R_Birthday);
    const Joined=useAppSelector((state)=>state.reg.R_Joined);

    const Page=useAppSelector((state)=>state.nav.page);


    const handleForm=(e:React.SyntheticEvent)=>{
        e.preventDefault();
    }

    



    return(
        <>     
        <div id='Register-Bg-Div'>
            <div id="Register-Larger-Container">
                <div id="Register-Container">
                        <Form onSubmit={handleForm}>
                            <h1>Register</h1><br/>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={e=>dispatch(setEmail(e.target.value))} 
                                />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={e=>dispatch(setPass(e.target.value))} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={e=>dispatch(setConfirm(e.target.value))} 
                                />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}

                            <Button 
                                variant="primary" 
                                type="submit"
                                // onClick={handleRegister}
                                onClick={()=>navigate('/Register2')}
                            >
                                Continue
                            </Button>
                        </Form> 
                </div>
                <div id="Register-Link" onClick={()=>navigate('/Login')}>[Back to Login]</div>
            </div>
        </div>
        </>
    )

}
export default Register;