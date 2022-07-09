import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Details.css';
import { Link } from 'react-router-dom';

const Details = ({ individual }) => {


  return (
    <div className='details'>

      <Link to='/'>
        <button className='back'>
          <FontAwesomeIcon icon={faArrowLeft} className='left' /> Back
        </button>
      </Link>

      <div className='flag-container'>
        <img className='flag' src={individual.flag} alt='flags' />
      </div>

      <div className='info-container'>
        <h1 className='name'>
          {individual.name}
        </h1>
        <div className='info-inner'>
          <div>
            <p className='details-info'>
              Native Name: <span> {individual.nativeName} </span>
            </p>

            <p className='details-info'>
              Population: <span> {individual.population} </span>
            </p>

            <p className='details-info'>
              Region: <span> {individual.region} </span>
            </p>

            <p className='details-info'>
              Sub Region: <span> {individual.subregion} </span>
            </p>

            <p className='details-info'>
              Capital: <span> {individual.capital} </span>
            </p>

          </div>

          <div>
            <p className='details-info'>
              Top Level Domain: <span> {individual.topLevelDomain} </span>
            </p>

            <p className='details-info'>
              Currency: <span> {individual.currencies.map((curr) => curr.name)}</span>
            </p>

            <p className='details-info'>
              Languages: <span> {individual.languages.map((lang) => `${lang.name}`)}</span>
            </p>

          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Details