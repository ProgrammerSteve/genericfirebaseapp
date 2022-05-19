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
import {auth} from '../../firebase-config';
import './Register.css';









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

    const[Email,setEmail]=useState<string>('');
    const[Pass,setPass]=useState<string>('');
    const[Confirm,setConfirm]=useState<string>('');


    const[registering, setRegistering]= useState<boolean>(false);
    const[error, setError]=useState<string>('');
    

    return(
        <>
                    
        <div
        id='Register-Bg-Div'

        >

        <div onClick={()=>navigate('/')}>Home</div>
        <div onClick={()=>navigate('/Login')}>Login</div>
        <div onClick={()=>navigate('/Register')}>Register</div>   

        <div
            id="Register-Container"
        >
            
                <Form>
                    <h1>Register</h1><br/>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={e=>setEmail(e.target.value)} 
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
                            onChange={e=>setPass(e.target.value)} 
                        />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={e=>setConfirm(e.target.value)} 
                        />
                    </Form.Group>


                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>


                </Form> 
            
        </div>


        </div>
                
        </>
    )

}
export default Register;