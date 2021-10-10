import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import "./Header.css"
const Header = () => {
    const {user,logout}=useFirebase()
    console.log(user);
    return (
        <div className="header">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/register">Regester</Link>
            <Link className="link" to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email&& <button onClick={logout}> Log Out </button>}
        </div>
    );
};

export default Header;