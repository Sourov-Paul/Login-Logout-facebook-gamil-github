import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import "./Login.css"
const Login = () => {
    const{signInUsingGoole,signInUsingGithub,signinUsingFacebook}=useFirebase()
    return (
        <div>
            <h2>Please Login</h2>

            <button onClick={signInUsingGoole} > Google Sign In</button>
            
            <button onClick={signInUsingGithub} > Github Sign In</button>
            <br />
            <button onClick={signinUsingFacebook} > Facebook Sign In</button>
            <br />
            <Link to="/regester">New User?</Link>
        </div>
    );
};

export default Login;

