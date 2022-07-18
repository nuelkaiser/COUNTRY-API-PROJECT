import React from 'react';
import './Display.css'

const DisplayLess = ({click, lesser}) => {
    return (
        <div className={click ? 'lightmode' : 'darkmode'} onClick={lesser}>
            Show Less...
        </div>
    )
}

export default DisplayLess