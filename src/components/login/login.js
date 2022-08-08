import React from 'react'
import "./login.css"
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";

function Login() {
  
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }


  useEffect(() => {
    console.log("email: ", email);  
  }, [email])

  useEffect(() => {
    console.log("password: ", password);
  }, [password])
  
  

  return (
    <div className='login-page'>
      <div style={{ width: "30%" }}></div>
      <form className='login'>
        <b className='title-sign-in'>Sign In</b>
        <p id="dha" >Don't have an account? <Link to={"/signup"} style={{color:"violet"}}>Sign Up</Link></p>
        <label className='email-password'>Email Address</label>
        <input type={Text} className="input-email-password" placeholder='Enter your email address' value={email} onChange={handleOnChangeEmail}></input>
        <label className='email-password'>Password</label>
        <input type={'password'} className="input-email-password" placeholder="Enter your password" value={password} onChange={handleOnChangePassword}></input>
        <br />
        <br/>
        <button className='btn-sign-in'>Sign In</button>
        <br />
        <Link to={"/forgotpassword"} style={{color:"violet"}}>Forgot your password?</Link>
      </form>
    </div>
  )
}

export default Login