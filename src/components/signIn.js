import React, { useState } from 'react';
import '../styles/signin.css';
import Posts from './postCard';
import { activePosts } from '../redux/activeSlice';
import { useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { login, loginAdmin } from '../redux/authSlice';

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
        if (user.email === 'admin@admin.com') {
          dispatch(loginAdmin());
          dispatch(login());
          console.log('Welcome Master: ', user.email);
        } else {
          dispatch(login());
          console.log(user.email);
        }
        handleDispatch(<Posts />);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERROR ', errorCode, errorMessage);
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

          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='rememberPasswordCheck'
            />
            <label className='form-check-label' htmlFor='rememberPasswordCheck'>
              Remember password
            </label>
          </div>

          <div className='d-grid'>
            <button
              className='btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2'
              type='submit'
            >
              Sign in
            </button>
            <div className='text-center'>
              <a className='small' href='/'>
                Forgot password?
              </a>
            </div>
          </div>
        </form>
        <div className='arrow'>
          <button
            type='button'
            className='btn btn-outline-secondary fw-bold mb-2 arrow-button'
            // onClick={() => handleDispatch(<Posts />)}
            // onClick={() => getAuth()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-return-left'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
