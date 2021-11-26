import React, { useState } from 'react';
import '../styles/signin.css';
import Posts from './postCard';
import { activePosts } from '../redux/activeSlice';
import { useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { login, loginAdmin, setUid } from '../redux/authSlice';
import { setUsername, setUserEmail, setUserUid } from '../redux/userSlice';
import { getUsers } from '../services/firestoreService';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleDispatch = (page) => {
    dispatch(change(page));
    dispatch(activePosts());
  };

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userID = user.uid;
        if (user.email === 'admin@admin.com') {
          dispatch(loginAdmin());
        } else {
          dispatch(login());
        }
        dispatch(setUid(user.uid));
        getUsers().then((user) => {
          user.map((x) => {
            if (x.uid === userID) {
              dispatch(setUsername(x.username));
              dispatch(setUserEmail(x.email));
              dispatch(setUserUid(x.uid));
            }
            return x;
          });
        });

        handleDispatch(<Posts />);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERROR ', errorCode, errorMessage); // Reemplazar por toast
      });
  }

  return (
    <div className='signin-container'>
      <div className='signin-wrapper'>
        <h2 className='text-capitalize fw-bold mb-5'>Sign in</h2>
        <form
          onSubmit={(e) => {
            handleSignIn(e);
          }}
        >
          <div className='form-floating mb-3'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <div className='d-grid pt-4'>
            <button
              className='btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2'
              type='submit'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
