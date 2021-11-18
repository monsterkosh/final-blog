import React from 'react';
import { useSelector } from 'react-redux';

const RightPanel = () => {
  // @ts-ignore
  const pageToRender = useSelector((state) => state.page.page);

  return (
    <div className='right-container'>
      <div className='right-wrapper'>
        <span>{pageToRender}</span>
      </div>
    </div>
  );
};

export default RightPanel;
