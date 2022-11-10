import React, { useState, useEffect } from 'react'
import {redirect} from 'react-router-dom';


import { Link } from "react-router-dom";
import Login_User from './Login_User';


function Add_User() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the firstname change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the firstname change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handlemobileNo = (e) => {
    setmobileNo(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const setting = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({firstname:firstname, lastname:lastname, mobileNo:mobileNo, password:password})
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstname === '' || lastname === '' ||mobileNo === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      try{
        const response = await fetch('http://localhost:8080/user/Add_User', setting);
          console.log(response);
        const ans = await response.json();
        
        console.log(ans);
    }catch(error) {
      console.log("Some error");
    }
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {mobileNo} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (

    
    <div className="form">
      <div>
        <h1> New User </h1>
      </div>
      
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">FirstName</label>
        <input onChange={handleFirstName} className="input"
          value={firstname} type="text" />
 
        <label className="label">LastName</label>
        <input onChange={handleLastName} className="input"
          value={lastname} type="text" />

        <label className="label">Mobile_No</label>
        <input onChange={handlemobileNo} className="input"
          value={mobileNo} type="mobileNo" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <ul>
          <li>
          <Link to='/Login_User'>Login</Link>
          </li>
      </ul>
      </form>
    </div>
  );
}

export default Add_User