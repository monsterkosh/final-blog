// @ts-nocheck
import React from 'react';
import Posts from '../components/postCard';
import SignIn from '../components/signIn';
import Profile from '../components/profile';
import CreatePost from '../components/createPost';
import '../styles/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../redux/pageSlice';
import {
  activeCreate,
  activePosts,
  activeProfile,
  activeSign,
} from '../redux/activeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const postActive = useSelector((state) => state.active.posts);
  const signActive = useSelector((state) => state.active.sign);
  const profileActive = useSelector((state) => state.active.profile);
  const createActive = useSelector((state) => state.active.create);
  const isLogged = useSelector((state) => state.auth.user);

  const handleDispatch = (page, state) => {
    dispatch(change(page));
    if (state === 'post') {
      dispatch(activePosts());
    } else if (state === 'sign') {
      dispatch(activeSign());
    } else if (state === 'create') {
      dispatch(activeCreate());
    } else if (state === 'profile') {
      dispatch(activeProfile());
    }
  };

  return (
    <div className='navbar-container'>
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <button
            className={`nav-link ${postActive}`}
            id='nav-home-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-home'
            type='button'
            role='tab'
            aria-controls='nav-home'
            aria-selected='true'
            onClick={() => handleDispatch(<Posts />, 'post')}
          >
            Posts
          </button>
          <button
            className={`nav-link ${createActive}`}
            id='nav-home-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-home'
            type='button'
            role='tab'
            aria-controls='nav-home'
            aria-selected='false'
            onClick={() => handleDispatch(<CreatePost />, 'create')}
          >
            Add a post
          </button>

          {isLogged ? (
            <button
              className={`nav-link ${profileActive}`}
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
              onClick={() => handleDispatch(<Profile />, 'profile')}
            >
              Profile
            </button>
          ) : (
            <button
              className={`nav-link ${signActive}`}
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
              onClick={() => handleDispatch(<SignIn />, 'sign')}
            >
              Sign-in
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
