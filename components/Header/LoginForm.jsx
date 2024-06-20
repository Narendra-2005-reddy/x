import React, { useState } from 'react';
import validator from "validator";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    setEmailError('');
    setPasswordError('');
    setErrorMessage('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else if (!email.includes('@')) {
      setEmailError('Email is not correct');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Password is required');
    }

    // Placeholder for password verification logic
    const isPasswordCorrect = true; // Replace this with actual password verification logic

    // Password strength validation
    if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      setErrorMessage('Password is not strong enough');
    }

    // If there are no errors and password is correct, set login success flag
    if (!emailError && !passwordError && isPasswordCorrect && !errorMessage) {
      setIsLoginSuccessful(true);
    }
  };

  return (
    <>
      {!isLoginSuccessful && (
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <MDBCol col='10' md='6'>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
            </MDBCol>
            <MDBCol col='4' md='6'>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='email'
                type='email'
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <div className="text-danger">{emailError}</div>}

              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='password'
                type='password'
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
              {errorMessage && <div className="text-danger">{errorMessage}</div>}

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSignIn}>Sign in</MDBBtn>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div>
              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Continue with Facebook
              </MDBBtn>
              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                <MDBIcon fab icon="twitter" className="mx-2" />
                Continue with Twitter
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
      {isLoginSuccessful && (
        <div>
          {/* Render your success message or redirect the user */}
         
        </div>
      )}
    </>
  );
}

export default LoginForm;
