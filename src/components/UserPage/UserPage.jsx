import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import TestPage from '../TestPage/TestPage';
import './UserPage.css';
import FunTimes from '../FunTimes/FunTimes';

function UserPage() {

  const user = useSelector((store) => store.user);

  return (<>

    <div className="container">
      <h2 className="welcomeName">Welcome, {user.username}</h2>
    </div>

    <div className="userFeed">
      <FunTimes />
    </div>
  </>
  );
}

export default UserPage;
