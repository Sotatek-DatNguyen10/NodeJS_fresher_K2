import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
  const [emailSignUp, setEmailSignUp] = useState("")
  const [passwordSignUp, setPasswordSignUp] = useState("")
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("")


  const handleOnChangeEmailSignUp = (e) => {
    setEmailSignUp(e.target.value);
  }

  const handleOnChangePasswordSignUp = (e) => {
    setPasswordSignUp(e.target.value);
  }

  const handleOnChangePasswordConfirmSignUp = (e) => {
    setPasswordConfirmSignUp(e.target.value);
  }

  return (
    <div className='signup-page'>
      <div style={{ width: "30%" }}></div>
      <form className='signup'>
        <b className='title-sign-up'>Sign Up</b>
        <p id="ha" > Have an account?  <Link to={"/"} style={{color:"violet"}}>Sign In</Link></p>
        <label className='email-password'>Email Address</label>
        <input type={Text} className="input-email-password" placeholder='Enter your email address' value={emailSignUp} onChange={handleOnChangeEmailSignUp}></input>
        <label className='email-password'>Password</label>
        <input type={'password'} className="input-email-password" placeholder="Enter your password" value={passwordSignUp} onChange={handleOnChangePasswordSignUp}></input>
        <label className='email-password'>Confirm Password</label>
        <input type={'password'} className="input-email-password" placeholder="Enter your password" value={passwordConfirmSignUp} onChange={handleOnChangePasswordConfirmSignUp}></input>
        <div style={{display:"flex"}}>
          <input className='cb-accept-term' type={'checkbox'}></input><p>I accept the <Link to={"/term_and_conditions"}>Term & Conditions</Link></p>
        </div>
        <button className='btn-sign-in'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp