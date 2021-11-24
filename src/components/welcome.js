// @ts-nocheck
import React from 'react';
import '../styles/welcome.css';
import DisplayPost from './displayPost';
import { useSelector } from 'react-redux';

const WelcomePage = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <div className='welcome-container'>
      {selectedPost ? (
        <DisplayPost />
      ) : (
        <div className='welcome-wrapper'>
          <div className='w-title'>
            <h1>BlogPlace</h1>
          </div>
          <div className='w-subtitle'>
            Welcome to your traveling blog place, where we share our experiences
            around the world.
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
