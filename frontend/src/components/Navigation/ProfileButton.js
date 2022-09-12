import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom'
import './ProfileButton.css'




function ProfileButton({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();



  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }
  if (!sessionUser) {
    return (<Redirect to='/'/>)
  }
  return (
    <>
      <div className='user-profile'>
        <button onClick={ logout }>Logout</button>
        <h1>My account</h1>
        <p>Welcome back, {sessionUser.firstName} ! </p>
      </div>
        
    </>
  )
}
export default ProfileButton;

  
