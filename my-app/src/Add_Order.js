import React, { useState, useEffect } from 'react'
import {redirect} from 'react-router-dom';


import { Link } from "react-router-dom";
import Login_User from './Login_User';


function Add_Order() {
  
  const [mobileNo, setmobileNo] = useState('');
  const [subCategory, setSubCategory] = useState();
  const [sub_total, setsub_total] = useState(); 
  
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
 
  
  // Handling the email change
  const handlemobileNo = (e) => {
    setmobileNo(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the SubCategory change
  const handlesubCategory = (e) => {
    setSubCategory(e.target.value);
    setSubmitted(false);
  };

  // Handling the setsub_total change
  const handlesub_total = (e) => {
    setsub_total(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const setting = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ mobileNo:mobileNo, subCategory:subCategory, sub_total:sub_total})
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sub_total === '' || subCategory === '' ||mobileNo === '' ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      try{
        const response = await fetch('http://localhost:8080/user/Add_Order', setting);
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
        <h1> Place Order </h1>
      </div>
      
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Mobile_No</label>
        <input onChange={handlemobileNo} className="input"
          value={mobileNo} type="mobileNo" />
 
        <label className="label">subCategory</label>
        <input onChange={handlesubCategory} className="input"
          value={subCategory} type="subCategory" />

        <label className="label">sub_total</label>
        <input onChange={handlesub_total} className="input"
          value={sub_total} type="sub_total" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <ul>
          <li>
          <Link to='/Add_Order'>Take Order</Link>
          </li>
      </ul>
      </form>
    </div>
  );
}

export default Add_Order