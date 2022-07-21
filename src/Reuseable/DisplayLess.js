import React from 'react';
import './Display.css'

const DisplayLess = ({click, lesser, id}) => {
    return (
        <div  id={id} className={click ? 'lightmodeless' : 'darkmodeless'} onClick={lesser}>
            Show Less...
        </div>
    )
}

export default DisplayLess