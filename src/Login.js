import React from 'react'
import spotifylogo from './spotify-logo.jpg'
import "./Login.css"
import { accessUrl } from './spotify'
function Login() {
    return (
        <div className="login">
             <img  src={spotifylogo} alt="LOGO"/> 
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
