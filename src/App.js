import React from 'react';
import LeftPanel from './views/leftPanel';
import './styles/app.css';
import RightPanel from './views/rightPanel';
import Navbar from './views/navbar';

function App() {
  return (
    <div className='App'>
      <div className='app-wrapper'>
        <div className='app-left'>
          <LeftPanel />
        </div>
        <div className='app-right'>
          <Navbar />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
