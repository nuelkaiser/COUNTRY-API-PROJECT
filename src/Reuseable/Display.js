import React from 'react';
import './Display.css';

const Display = ({setter, click, id}) => {
  return (
    <div id={id} className={click ? 'lightmode' : 'darkmode'} onClick={setter}>
        Load More...
    </div>
  )
}

export default Display