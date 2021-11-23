// @ts-nocheck
import React, { useState } from 'react';
import '../styles/createpost.css';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firestoreService';
import { useSelector } from 'react-redux';
import { activePosts } from '../redux/activeSlice';
import { useDispatch } from 'react-redux';
import { change } from '../redux/pageSlice';
import Posts from './postCard';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const userUID = useSelector((state) => state.user.uid);
  const userName = useSelector((state) => state.user.username);

  const handleDispatch = (page) => {
    dispatch(change(page));
    dispatch(activePosts());
  };

  async function createDoc(e) {
    e.preventDefault(e);
    const docRef = await addDoc(collection(db, 'posts'), {
      author: userName,
      authorID: userUID,
      title: title,
      text: text,
      date: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
    handleDispatch(<Posts />);
  }
  return (
    <div className='postform-container'>
      <div className='postform-wrapper'>
        <form
          onSubmit={(e) => {
            createDoc(e);
          }}
        >
          <div className='form-group form-title'>
            <label htmlFor='exampleFormControlInput1'>Title</label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group form-textarea'>
            <label htmlFor='exampleFormControlTextarea1'>Text</label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={10}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button className='btn btn-md btn-primary' type='submit'>
            Post
          </button>
        </form>
        <div className='form-button'></div>
      </div>
    </div>
  );
};

export default PostForm;
