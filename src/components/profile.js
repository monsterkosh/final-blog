// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import adminAvatar from '../assets/admin-avatar.png';
import userAvatar from '../assets/user-avatar.png';
import { fsLogout } from '../services/firestoreService';
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/profile.css';

const Profile = () => {
  const activeUserEmail = useSelector((state) => state.user.email);
  const activeUsername = useSelector((state) => state.user.username);
  const isAdmin = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    fsLogout();
    dispatch(logout());
    window.location.reload(false);
  };

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
        <div className='profile logout'>
          <button
            onClick={() => handleLogout()}
            type='button'
            className='btn btn-danger'
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
