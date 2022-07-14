import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({search, searched, click}) => {

    return (
        <div className={click ? 'input-light-container' : 'input-container'}>
        <FontAwesomeIcon icon={faSearch} className={click ? 'search-light' : 'search-icon'}/>
            <input className={click ? 'country-light' : 'country-input'} placeholder='Search for a country...' value={search} onChange={(e) => searched(e.target.value)}/>
        </div>
    )
}

export default SearchBox