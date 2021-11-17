import React from 'react';
import '../styles/post.css';

const PostCard = () => {
  return (
    <div className='post-container'>
      <div className='text-dark bg-light mb-3'>
        <div className='card--header'>Title</div>
        <div className='card--body'>
          <p className='card--text'>
            Author: <span>Emiliano</span>
          </p>
          <p className='card--subtext'>
            Date: <span>posted</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
