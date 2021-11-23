import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firestoreService';
import '../styles/createpost.css';
import NotLogged from './notLogged';

const CreatePost = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const isLogged = useSelector((state) => state.auth.user);

  async function createDoc() {
    const docRef = await addDoc(collection(db, 'posts'), {
      author: 'Developer',
      title: 'imaginary title',
      text: 'Japan is the shit',
      // times: fb.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  }

  return (
    <div className='createpost-container'>
      <div className='createpost-wrapper'>
        {isLogged ? (
          <div>
            Create post
            <button onClick={() => createDoc()}>send</button>
          </div>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default CreatePost;
