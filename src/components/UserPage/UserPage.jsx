import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import TestPage from '../TestPage/TestPage';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (<>
    <div className="container">
      <h2 className="welcomeName">Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
    <div className="userFeed">
        <TestPage />
        </div>
        </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
