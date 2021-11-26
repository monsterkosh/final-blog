// @ts-nocheck
import React, { useEffect } from 'react';
import '../styles/post.css';
import { getPosts } from '../services/firestoreService';
import { useDispatch, useSelector } from 'react-redux';
import { posts, selectPost } from '../redux/postSlice';
import { deletePost } from '../services/firestoreService';
import Error from '../components/error';

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
    deletePost(id);
  }

  useEffect(() => {
    handleGetPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='post-container'>
      {dbase ? (
        dbase.map((data, key) => {
          return (
            <div className='post-card mb-3'>
              <div key={key} className='text-dark bg-light mb-0 post-box'>
                <div className='card--header'>Title: {data.title}</div>
                <div className='card--body'>
                  <p className='card--text'>
                    Author: <span>{data.author}</span>
                  </p>
                  <p className='card--subtext'>
                    Date: <span>{data.date.substring(0, 10)}</span>
                  </p>
                </div>
              </div>
              <div className='buttons'>
                <button
                  className='post-button btn-sm button btn btn-primary'
                  onClick={() => {
                    handleSelectPost(data);
                  }}
                >
                  View
                </button>

                {isAdmin ? (
                  <button
                    className='post-button btn-sm button btn btn-danger'
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
          );
        })
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Posts;
