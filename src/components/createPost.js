import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import { activeSign } from '../redux/activeSlice';
import SignIn from './signIn';
import '../styles/createpost.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const isLogged = useSelector((state) => state.auth.user);

  const handleDispatch = (page) => {
    dispatch(change(page));
    dispatch(activeSign());
  };

  return (
    <div className='createpost-container'>
      <div className='createpost-wrapper'>
        {isLogged ? (
          <div>Create post</div>
        ) : (
          <div className='createpost-warning'>
            <div>You need to be logged in to create a post.</div>
            <button
              className='btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2'
              type='submit'
              onClick={() => handleDispatch(<SignIn />)}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
