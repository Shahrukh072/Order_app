import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function Login_User() {
    const [mobileNo,setmobileNo]=useState(""); 
	const [password,setPassword]=useState(""); 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
	// const[dataInput, setDataInput]=useState(""); 

    const setting = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mobileNo:mobileNo, password:password})
      
      };

	const handleSubmit=async (e)=>{
		e.preventDefault();
    if (mobileNo === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      try{
        const response = await fetch('http://localhost:8080/user/Login_User', setting);
          console.log(response);
        const ans = await response.json();
        
        console.log(ans);
    }catch(error) {
      console.log("Some error");
    }
    }
	}

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


    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {mobileNo} Logged in successfully!!</h1>
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

	return(
	<div>

      <div>
        <h1>User Login Page</h1>
      </div>
      
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

		<form action="" onSubmit={handleSubmit}> 
        <label className="label">Mobile_No</label>
        <input onChange={handlemobileNo} className="input"
          value={mobileNo} type="mobileNo" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />

			<button onClick={handleSubmit} className="btn" type="submit">
          Login
        </button>
		</form>
	</div>
)
}

export default Login_User