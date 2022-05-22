import React, {useEffect,useState,useCallback, PropsWithChildren} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {auth} from '../.././firebase-utils';

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
    const [loading, setLoading]= useState(true);

    const AuthCheck=useCallback(
        ()=>{
            onAuthStateChanged(auth, (user)=>{
                // console.log(children);
                if(user || show){
                    setLoading(false)
                }else{
                    setLoading(true)
                    // console.log('unauthorized')
                    navigate('/Login')
                }
            })
        },[auth]
    )

    useEffect(()=>{
        AuthCheck();
        return ()=>AuthCheck();
    },[AuthCheck])

    if(loading) return<p>Loading...</p>;
    return <>{children}</>

}

export default AuthRoute