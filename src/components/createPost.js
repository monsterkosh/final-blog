import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/createpost.css';
import NotLogged from './notLogged';
import PostForm from './postForm';

const CreatePost = () => {
  // const dispatch = useDispatch();
  // @ts-ignore
  const isLogged = useSelector((state) => state.auth.user);
  const isAdmin = useSelector((state) => state.auth.admin);

  return (
    <div className='createpost-container'>
      <div className='createpost-wrapper'>
        {isLogged || isAdmin ? <PostForm /> : <NotLogged />}
      </div>
    </div>
  );
};

export default CreatePost;
