import React from 'react';
import PostCard from '../components/postCard';
import '../styles/post.css';

const Posts = () => {
  return (
    <div className='posts-container'>
      <div className='posts-wrapper'>
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
