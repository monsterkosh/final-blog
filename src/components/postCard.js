import React, { useState, useEffect } from 'react';
import '../styles/post.css';
import { getPosts } from '../services/firestoreService';

const Posts = () => {
  const [dbase, setDbase] = useState([]);

  function handleGetPosts() {
    getPosts().then((items) => {
      setDbase(items);
    });
  }

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div className='post-container'>
      {dbase.map((data, key) => {
        return (
          <div key={key} className='text-dark bg-light mb-3'>
            <div className='card--header'>{data.title}</div>
            <div className='card--body'>
              <p className='card--text'>
                Author: <span>{data.author}</span>
              </p>
              <p className='card--subtext'>
                Date: <span>{data.date.substring(0, 10)}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
