import React from 'react';
import './Display.css';

const Display = ({setter, click}) => {
  return (
    <div className={click ? 'lightmode' : 'darkmode'} onClick={setter}>
        Load More...
    </div>
  )
}

export default Display