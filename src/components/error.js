import React from 'react';
import '../styles/error.css';

const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-wrapper'>
        <div className='d-flex justify-content-center '>
          <div className='spinner-border text-primary center' role='status'>
            <span className='sr-only'></span>
          </div>
        </div>
        <div className='error-msg'>Loading...</div>
      </div>
    </div>
  );
};

export default Error;
