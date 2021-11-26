// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import adminAvatar from '../assets/admin-avatar.png';
import userAvatar from '../assets/user-avatar.png';
import '../styles/profile.css';

const Profile = () => {
  const activeUsername = useSelector((state) => state.user.username);
  const activeUserEmail = useSelector((state) => state.user.email);
  const isAdmin = useSelector((state) => state.auth.admin);

  console.log(isAdmin);

  return (
    <div className='profile-container'>
      <div className='profile-wrapper'>
        <div className='profile-avatar'>
          {isAdmin ? (
            <img
              className='profile-avatar-img'
              src={adminAvatar}
              alt='admin-avatar'
            />
          ) : (
            <img src={userAvatar} alt='user-avatar' />
          )}
        </div>
        <div className='profile-username'>{activeUsername}</div>
        <div className='profile-email'>{activeUserEmail}</div>
      </div>
    </div>
  );
};

export default Profile;
