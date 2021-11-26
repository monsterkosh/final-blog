import React from 'react';
import '../styles/error.css';
import error from '../assets/error.png';

const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-wrapper'>
        <div className='post-error'>
          <div className='post-firebase-error'>
            <span>FirebaseError: </span>
            `Quota exceeded.
          </div>
          <div className='post-error-msg'>
            Sorry, it looks like the Firebase Quota has been exceeded. Please
            try again in 60 minutes.
          </div>
          <div className='error-image'>
            <img className='error-img' src={error} alt='error-robot' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
