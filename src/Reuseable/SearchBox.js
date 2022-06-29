import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({search, searched}) => {

    return (
        <div className='input-container'>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            <input className='country-input' placeholder='Search for a country...' value={search} onChange={(e) => searched(e.target.value)}/>
        </div>
    )
}

export default SearchBox