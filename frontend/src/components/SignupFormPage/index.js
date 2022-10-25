import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Footer from "../Footer/Footer";
import './SignupForm.scss';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({firstName, lastName, email, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Password must be the same as the Password field']);
  };

  return (
    <>
        <div className="login-backg">
      <div className='signup-form'>
          <form onSubmit={handleSubmit}>
            <div className='text-header'>
              <h1 className="login-logout-header">Register</h1>
              <p>Please fill in the information below:</p>
            </div>
        <ul className="errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          <input
            className='formItem'
            type="text"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          
          <input
            className='formItem'
            type="text"
            value={firstName}
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          
          <input
            className='formItem'
            type="text"
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          
          <input
            className='formItem'
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          
          <input
            className='formItem'
            type="password"
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className='signup-button'>CREATE MY ACOUNT</button>
      </form>
      </div>
    </div> 
    <Footer/>
    </> 
  );
}

export default SignupFormPage;