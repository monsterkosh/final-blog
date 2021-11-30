import React, { useState } from 'react';
import '../styles/signin.css';
import Posts from './postCard';
import { activePosts } from '../redux/activeSlice';
import { useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { login, loginAdmin, setUid } from '../redux/authSlice';
import { setUserEmail, setUsername } from '../redux/userSlice';
import { getUsers } from '../services/firestoreService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        } else {
          dispatch(login());
        }
        dispatch(setUid(user.uid));
        // @ts-ignore
        dispatch(setUserEmail(user.auth.currentUser.email));
        getUsers().then((res) =>
          res.map((x) => {
            // @ts-ignore
            if (user.auth.currentUser.email === x.email) {
              dispatch(setUsername(x.username));
            }
            return null;
          })
        );
        handleDispatch(<Posts />);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <div className='signin-container'>
      <div className='signin-wrapper'>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
