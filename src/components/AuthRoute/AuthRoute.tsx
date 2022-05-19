import React, {useEffect,useState, PropsWithChildren} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {auth} from '../.././firebase-config';

export interface Props {
    children:React.ReactNode;
    show: boolean;
  }

const AuthRoute: React.FunctionComponent<Props>  = (props) => {
    const {
        show, 
        children,
    }=props;


    const navigate=useNavigate();
    const [loading, setLoading]= useState(false);


    const AuthCheck= onAuthStateChanged(auth, (user)=>{
        // console.log(children);
        if(user || show){
            setLoading(false)
        }else{
            console.log('unauthorized')
            navigate('/Login')
        }
    })



    useEffect(()=>{
        AuthCheck();
        return ()=>AuthCheck();
    },[auth])


    if(loading) return<p>Loading...</p>;
    return <>{children}</>

}

export default AuthRoute