import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.scss';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
        console.log(res.statusText)
      });
  };
  const handleDemo = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ email:'zoubug@gmail.com', password: '123456' }))
  }

  return (
    <>
    
    <div className='loginForm'>
      <form onSubmit={handleSubmit}>
        <div id='textHeader'>
          <h1 className="login-logout-header">Login</h1>
          <p>Please enter your e-mail and password:</p>
        </div>
        <ul className="errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        
        <label>
          <input
              id='formItem'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </label>
          <label>
            <input
              id='formItem'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </label>
          <button type="submit" className="login-button">Log In</button>
          <div id='bottomForm'>
            <p className="create-account">Don't have an account?  <a href='/signup'>Create one</a></p>
  
            <p>or you can use the  <span onClick={handleDemo} className='demoUserButton'>Demo User</span></p>
          </div>
      </form>
    </div>
     
    </>
  );
}

export default LoginFormPage;