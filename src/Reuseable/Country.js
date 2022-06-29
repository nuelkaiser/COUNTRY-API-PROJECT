import React from 'react';
import './Country.css'

const Country = ({ name, flag, population, region, capital, setSelectedCountry }) => {
    return (
        <div className='single-country'  onClick={() => setSelectedCountry(name)}>

            <img className='flag-image' src={flag} alt='avatar' />

            <div className='country-text'>
                <h3 className='country-name'>
                    {name}
                </h3>

                <p className='country-info'>
                  Population: <span> {population} </span>
                </p>

                <p className='country-info'>
                 Region: <span> {region} </span>
                </p>

                <p className='country-info'>
                 Capital: <span> {capital} </span>
                </p>
            </div>

        </div>
    )
}

export default Country