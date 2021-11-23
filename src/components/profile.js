// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const activeUsername = useSelector((state) => state.user.username);
  const activeUserEmail = useSelector((state) => state.user.email);

  console.log(activeUsername);

  return (
    <div className='profile-container'>
      <div className='profile-wrapper'>
        <h1>User: {activeUsername}</h1>
        <h1>Email: {activeUserEmail}</h1>
      </div>
    </div>
  );
};

export default Profile;
