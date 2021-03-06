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

import {auth,db} from '../../firebase-utils';

import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithEmailAndPassword,
} from 'firebase/auth'




import{
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    onSnapshot,
    query,where,
} from 'firebase/firestore';





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









import './Login.css';

function Login() {



    const dispatch=useAppDispatch();
    const profileEmail=useAppSelector((state)=>state.pro.P_Email);
    const profileUsername=useAppSelector((state)=>state.pro.P_Username);
    const profileName=useAppSelector((state)=>state.pro.P_Name);
    const profileBirthday=useAppSelector((state)=>state.pro.P_Birthday);
    const profileJoined=useAppSelector((state)=>state.pro.P_Joined);



    const profile_uid=useAppSelector((state)=>state.nav.profile_uid);






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
            console.log('Logging in:');
            console.log('LogIn: ', resp.user.uid);
            const colRef=collection(db,'users');

            const q=query(colRef, where("uid","==",resp.user.uid));
            onSnapshot(q,(snapshot)=>{
                let data:any= [];
                snapshot.docs.forEach((doc)=>{
                    data.push({
                        ...doc.data(),
                        id: doc.id,
                    })
                })

                // console.log("Data Retrieved: ",data[0]);
                // console.log("Username: ",data[0].Username);
                // console.log("Name: ",data[0].Name);
                // console.log("Email: ",data[0].email);
                // console.log("Joined: ",data[0].createdAt);
                // console.log("Birthday: ",data[0].Birthday);
                dispatch(setProfileEmail(data[0].email));
                dispatch(setProfileUsername(data[0].Username));
                dispatch(setProfileName(data[0].Name));
                dispatch(setProfileJoined(data[0].Joined));
                dispatch(setProfileBirthday(data[0].Birthday));
                dispatch(setUID(resp.user.uid));
                console.log("UID: ",resp.user.uid);

            })
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
                <div id="Login-Larger-Container">
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



                                {/* <Button 
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
                                </Button>                     */}



                            </Form>
                        </div>
                        <div id="Register-Link" onClick={()=>navigate('/Register')}>Register</div>
                    </div>
            </div>
        </>
    )
}
export default Login;