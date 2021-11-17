import React, { useState } from 'react';
import Posts from './postsPage';
import SignIn from './signInPage';
import Profile from './profilePage';
import Admin from './adminPage';
import '../styles/navbar.css';

const Navbar = () => {
  const [postStatus, setPostStatus] = useState('active');
  const [signStatus, setSingStatus] = useState('');
  const [profileStatus, setProfileStatus] = useState('');
  const [adminStatus, setAdminStatus] = useState('');
  const [toRender, setToRender] = useState(<Posts />);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleStatus = (button) => {
    switch (button) {
      case 'post':
        setPostStatus('active');
        setSingStatus('');
        setProfileStatus('');
        setAdminStatus('');
        setToRender(<Posts />);
        break;
      case 'sign':
        setPostStatus('');
        setSingStatus('active');
        setProfileStatus('');
        setAdminStatus('');
        setToRender(<SignIn />);
        break;
      case 'profile':
        setPostStatus('');
        setSingStatus('');
        setProfileStatus('active');
        setAdminStatus('');
        setToRender(<Profile />);
        break;
      case 'admin':
        setPostStatus('');
        setSingStatus('');
        setProfileStatus('');
        setAdminStatus('active');
        setToRender(<Admin />);
        break;
      default:
        break;
    }
  };

  return (
    <div className='navbar-container'>
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <button
            className={`nav-link ${postStatus}`}
            id='nav-home-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-home'
            type='button'
            role='tab'
            aria-controls='nav-home'
            aria-selected='true'
            onClick={() => {
              handleStatus('post');
            }}
          >
            Posts
          </button>

          {loggedIn ? (
            <button
              className={`nav-link ${profileStatus}`}
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
              onClick={() => {
                handleStatus('profile');
              }}
            >
              Profile
            </button>
          ) : (
            <button
              className={`nav-link ${signStatus}`}
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
              onClick={() => {
                handleStatus('sign');
              }}
            >
              Sign-ing
            </button>
          )}
          {isAdmin ? (
            <button
              className={`nav-link ${adminStatus}`}
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
              onClick={() => {
                handleStatus('admin');
              }}
            >
              Admin
            </button>
          ) : null}
        </div>
      </nav>
      {toRender}
    </div>
  );
};

export default Navbar;
