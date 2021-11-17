import React, { useEffect } from 'react';
import LeftPanel from './views/leftPanel';
import './styles/app.css';
import { firebaseConfig } from './auth/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import RightPanel from './views/rightPanel';

function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getCities(db) {
    const citiesCol = collection(db, 'users');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(citiesCol.firestore);
    // return cityList;
  }

  useEffect(() => {
    getCities(db);
  });

  return (
    <div className='App'>
      <div className='app-wrapper'>
        <div className='app-left'>
          <LeftPanel />
        </div>
        <div className='app-right'>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
