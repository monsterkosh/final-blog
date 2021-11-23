import React from 'react';
import SignIn from './signIn';
import '../styles/createpost.css';
import { useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import { activeSign } from '../redux/activeSlice';

const NotLogged = () => {
  const dispatch = useDispatch();
  // @ts-ignore

  const handleDispatch = (page) => {
    dispatch(change(page));
    dispatch(activeSign());
  };

  return (
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
  );
};

export default NotLogged;
