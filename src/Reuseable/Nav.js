import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav-container'>
            <h1>
                Where in the World?
            </h1>

            <div className='nav-switch'>
                <FontAwesomeIcon icon={faRocket} />
                Dark mode
            </div>
        </div>
    )
}

export default Nav