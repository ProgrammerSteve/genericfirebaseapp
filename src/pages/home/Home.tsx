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


import "./Home.css";



import{getAuth, signOut} from 'firebase/auth';
import {auth} from '../../firebase-config';


import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/profile/profile';


const Home=()=>{
    return(
        <>
            <NavBar/>
            <Profile/>







        </>
    )
}
export default Home;