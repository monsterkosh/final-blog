// @ts-nocheck
import React, { useEffect } from 'react';
import '../styles/post.css';
import { getPosts } from '../services/firestoreService';
import { useDispatch, useSelector } from 'react-redux';
import { posts, selectPost } from '../redux/postSlice';

const Posts = () => {
  const dbase = useSelector((state) => state.posts.allPosts);
  const isAdmin = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  function handleGetPosts() {
    getPosts().then((items) => {
      dispatch(posts(items));
    });
  }

  function handleSelectPost(data) {
    dispatch(selectPost(data));
  }

  function handleDelete(id) {
    console.log(id);
  }

  useEffect(() => {
    handleGetPosts();
  });

  return (
    <div className='post-container'>
      {dbase
        ? dbase.map((data, key) => {
            return (
              <div className='post-card mb-3'>
                <div key={key} className='text-dark bg-light mb-0 post-box'>
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
                <button
                  className='post-button button btn btn-primary'
                  onClick={() => {
                    handleSelectPost(data);
                  }}
                >
                  View
                </button>

                {isAdmin ? (
                  <button
                    className='post-button button btn btn-danger'
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
