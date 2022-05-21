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
import { useState } from 'react';

import { 
    BrowserRouter as Router, 
    Routes, 
    Route,
    useNavigate,
    Link
  } from 'react-router-dom';

  import {auth} from '../../firebase-utils';



import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithEmailAndPassword,
} from 'firebase/auth'


import './Login.css';

function Login() {
    const navigate= useNavigate();
    const [authing,setAuthing]=useState(false);




    const signInWithGoogle=async()=>{
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(resp=>{
            console.log(resp);
            console.log(resp.user.uid);
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
            setAuthing(false);
        })
    }




    const signInWithEmail=async()=>{
        setAuthing(true);
        signInWithEmailAndPassword(auth, Email, Pass)
        .then(resp=>{
            console.log('Logging in:')
            console.log(resp.user.uid);
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
            setAuthing(false);
        })
    }




  // const singUpWithEmailAndPassword=(auth)=>{
  //   if(error !== '') setError('')
  //   if(registerPass!==registerPassConfirm) setError('Please make sure your passwords match.')
  //   setRegistering(true);
  //   createUserWithEmailAndPassword(auth,email,password)
  //   .then(result=>{
  //     console.log(result);
  //     navigate('/login');
  //   })
  //   .catch(error=>console.log(error))
  //   setRegistering(false);
  // }


    const[Email,setEmail]=useState<string>('');
    const[Pass,setPass]=useState<string>('');
    // console.log(auth)
    return(
        <>
            
            <div id="Login-Bg-Div">
            <div onClick={()=>navigate('/')}>Home</div>
            <div onClick={()=>navigate('/Login')}>Login</div>
            <div onClick={()=>navigate('/Register')}>Register</div>

            <div id="Login-Container">
                <Form>
                    <h1>Login</h1><br/>
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


                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}


                    
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={()=>signInWithEmail()}
                        disabled={authing}
                    >
                        Signin
                    </Button>



                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={()=>signInWithGoogle()}
                        disabled={authing}
                        style={{backgroundColor:'white'}}
                    >
                         <img 
                            src="google_logo.png" 
                            alt="google" 
                            height="18px" 
                            width="auto"
                         />
                    </Button>                    



                </Form>
            </div>
            </div>
        </>
    )
}
export default Login;