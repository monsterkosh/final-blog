import React, { useEffect } from 'react';
import '../styles/post.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';

const Posts = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyADSqO_rjouqzxtlnzN3auZLD_8ODWFyOY',
    authDomain: 'blogplace-f86de.firebaseapp.com',
    projectId: 'blogplace-f86de',
    storageBucket: 'blogplace-f86de.appspot.com',
    messagingSenderId: '384850488899',
    appId: '1:384850488899:web:83d1f1c247e2cbd8d0aef6',
    measurementId: 'G-ND0CR4Q33P',
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getCities(db) {
    const q = query(collection(db, 'posts'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }

  useEffect(() => {
    getCities(db);
  });

  return (
    <div className='post-container'>
      <div className='text-dark bg-light mb-3'>
        <div className='card--header'>Title</div>
        <div className='card--body'>
          <p className='card--text'>
            Author: <span>Emiliano</span>
          </p>
          <p className='card--subtext'>
            Date: <span>posted</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
