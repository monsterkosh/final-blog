import React from 'react';
import '../styles/welcome.css';

const WelcomePage = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-wrapper'>
        <div className='w-title'>
          <h1>BlogPlace</h1>
        </div>
        <div className='w-subtitle'>
          welcome to your traveling blog place, where we share our experiences
          around the world
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
