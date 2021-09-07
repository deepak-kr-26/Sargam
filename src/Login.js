import React from 'react'
import './Login.css'
import Logo from './Images/Logo1.png';
import { loginUrl } from './Spotify';

const Login = () => {
    return (
        <div className="login">
            <img src={Logo} alt="Logo" />
            <a href={loginUrl}>LOGIN WITH SARGAMA</a>
        </div>
    )
}

export default Login
