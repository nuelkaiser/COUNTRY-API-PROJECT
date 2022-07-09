import React from 'react';
import './Country.css'

const Country = ({ individualCountry, data }) => {
    return (
        <div className='single-country' onClick={() => individualCountry(data)}>

            <img className='flag-image' src={data.flag} alt='avatar' />

            <div className='country-text'>
                <h3 className='country-name'>
                    {data.name}
                </h3>

                <p className='country-info'>
                    Population: <span> {data.population} </span>
                </p>

                <p className='country-info'>
                    Region: <span> {data.region} </span>
                </p>

                <p className='country-info'>
                    Capital: <span> {data.capital} </span>
                </p>
            </div>

        </div>
    )
}

export default Country