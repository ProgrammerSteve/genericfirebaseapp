import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState} from 'react';


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


import { auth } from './firebase-config';
import { initializeApp } from "firebase/app";
import AuthRoute from './components/AuthRoute/AuthRoute';


import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider 
} from "firebase/auth";


import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  useNavigate 
} from 'react-router-dom';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {


  return (
    <div className="App">

        <Routes>
          <Route 
          path="/"
          element={

            <AuthRoute 
            show={false}
            >
              <Home/>
            </AuthRoute>

          } />
          
          <Route 
          path="Register" 
          element={

            <AuthRoute 
            show={true}
            >
              <Register/>
            </AuthRoute>
          
          } />

          <Route path="Login" element={<Login/>} />
        </Routes>


    </div>
  );
}

export default App;
