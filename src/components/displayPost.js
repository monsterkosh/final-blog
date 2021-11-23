// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/displaypost.css';

const DisplayPost = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <div className='display-container'>
      <div className='display-wrapper'>
        <div className='selectedpost'>
          <div className='selected-title'>{selectedPost.title}</div>
          <div className='selected-text'>{selectedPost.text}</div>
          <div className='selected-author'>{selectedPost.author}</div>
          <div className='selected-date'>{selectedPost.date}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;
