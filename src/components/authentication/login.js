import React, { useState, Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/login-logo.svg';
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase-utils';
import './login.css'

const defaultFormFields = {
  email: '',
  password: '',
};

function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
      setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      resetFormFields(); 
    } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('Password incorrect');
            break;
          case 'auth/user-not-found':
            alert('User not found');
            break;
          default:
            console.log(error);
        };
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
  
      await createUserDocumentFromAuth (user); 
      resetFormFields();
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Failed! Email already in use.', error);
      } else {
        console.log('error creating user', error);
      }
    }
};

const handleChange = (event) => {
  const { name, value} = event.target;

  setFormFields({ ...formFields, [name]: value });
};

  return (
    <Fragment>
      <div className='login'>
        <Link className='login-logo' to='/'>
          <Logo className='login-logo-image'/>
        </Link>

        <div className="login-container">
          <h1>Welcome back!</h1>
          
          <form onSubmit={handleSubmit}>
            <h5>Email</h5>
            <input 
            type="email" 
            placeholder="Email" 
            required
            onChange={handleChange}
            name="email"
            value={email}
            />

            <h5>Password</h5>
            <input 
            type="password" 
            placeholder="Password"
            required
            onChange={handleChange}
            name="password"
            value={password}
             />

            <button 
            type='submit'
            className='login-signIn-button'>
            Login
            </button>
          </form>

          <p className='terms'>
            <input 
            type="checkbox" 
            required 
            />
            <Link 
            className='underline'
            to='/terms'>
            I agree to the Shoppa Website terms & Conditions of use & Sale.
            </Link>
          </p>

          <button 
          type='submit'
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