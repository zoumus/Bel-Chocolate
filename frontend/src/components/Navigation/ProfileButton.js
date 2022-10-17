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
    <div className='account-holder'>
    <div className="top-user-profile">
      <div className='user-profile-one'>
        <div className="logout-button" onClick={ logout }>Logout</div>
        <div className="my-account">My account</div>
        <div>Welcome back, {sessionUser.firstName} ! </div>
        <div className="add-border">My orders</div>
        <div className="line-border"></div>
        <div className='last-p'>You haven't placed any orders yet  <span className="first-last">{sessionUser.firstName} {sessionUser.lastName}</span></div>
      </div>
    </div>
    </div>
  )
}
export default ProfileButton;

  
