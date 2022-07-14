import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = ({clicked, click}) => {
    return (
        <div className={click ? 'nav-light-container' : 'nav-container'}>
            <h1>
                Where in the World?
            </h1>

            <div className='nav-switch' onClick={clicked}>
                <FontAwesomeIcon icon={faRocket} />
                {click ?  'Light mode' : 'Dark mode'}
            </div>
        </div>
    )
}

export default Nav