import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function RegisterForm({ onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // After successful submission, set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          {!isSubmitted ? (
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg' />
                    <MDBInput label='Repeat your password' id='form4' type='password' />
                  </div>
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>
                  <MDBBtn className='mb-4' size='lg' type="submit">Register</MDBBtn>
                </form>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          ) : (
            <div className="text-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Successful!</p>
              <MDBBtn className='mb-4' size='lg' onClick={onClose}>Close</MDBBtn>
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterForm;
