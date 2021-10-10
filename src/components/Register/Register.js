import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
              <span>Email: </span> <input type="email" name="password" id="" />
                <br />
                <span>Password: </span>  <input type="password" name="password" id="" /><br />
                <input type="submit" value="Submit"></input>
            </form>
            <Link to="/login">Already Registeered </Link>
        </div>
    );
};

export default Register;