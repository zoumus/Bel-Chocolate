import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom'




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
        <button onClick={ logout }>Logout</button>
        <h1>My account</h1>
        <p>Welcome back, {sessionUser.firstName} ! </p>
    </>
  )
}
export default ProfileButton;

  
//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };
  
//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//       setShowMenu(false);
//     };

//     document.addEventListener('click', closeMenu);
  
//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//   };

//   return (
//     <>
//       <button onClick={openMenu}>
//         <i className="fa-solid fa-user-circle" />
//       </button>
//       {showMenu && (
//         <ul className="profile-dropdown">
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>
//             <button onClick={logout}>Log Out</button>
//           </li>
//         </ul>
//       )}
//     </>
//   );
// }

// export default ProfileButton;