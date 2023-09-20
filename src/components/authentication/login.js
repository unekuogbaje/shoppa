import React, { useState, Fragment } from 'react'
import { Link, useHistory } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/login-logo.svg';
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
    <Fragment>
      <div className='login'>
        <Link className='login-logo' to='/'>
          <Logo className='login-logo-image'/>
        </Link>

        <div className="login-container">
          <h1>Welcome back!</h1>
          
          <form>
            <h5>Email</h5>
            <input 
            type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input 
            type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <button 
            type='submit'
            className='login-signIn-button'>
            Login
            </button>
          </form>

          <p className='terms'>
            <input type="checkbox" />
            <Link 
            className='underline'
            to='/terms'>
            I agree to the Shoppa Website terms & Conditions of use & Sale.
            </Link>
          </p>

          <button 
          className='login-register-button'
          >
          Create your Shoppa Account
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Login