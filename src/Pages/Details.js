import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Details.css';
import { Link } from 'react-router-dom';
//import Border from '../Reuseable/Border';

const Details = ({ individual, click }) => {


  return (
    <div className={click ? 'details-light' : 'details-container'}>
      <div className='details'>

        <Link to='/'>
          <button className={click ? 'back-light' : 'back'}>
            <FontAwesomeIcon icon={faArrowLeft} className='left' /> Back
          </button>
        </Link>

        <div className='details-inner'>
          <div className='flag-container'>
            <img className='flag' src={individual.flag} alt='flags' />
          </div>

          <div className='info-container'>
            <h1 className={click ? 'name-light' : 'name'}>
              {individual.name}
            </h1>
            <div className='info-inner'>
              <div>
                <p className={click ? 'info-light' : 'details-info'}>
                  Native Name: <span> {individual.nativeName} </span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Population: <span> {individual.population} </span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Region: <span> {individual.region} </span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Sub Region: <span> {individual.subregion} </span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Capital: <span> {individual.capital} </span>
                </p>

              </div>

              <div>
                <p className={click ? 'info-light' : 'details-info'}>
                  Top Level Domain: <span> {individual.topLevelDomain} </span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Currency: <span> {individual.currencies.map((curr) => curr.name)}</span>
                </p>

                <p className={click ? 'info-light' : 'details-info'}>
                  Languages: <span> {individual.languages.map((lang) => `${lang.name}`)}</span>
                </p>

              </div>
            </div>
            {/*
             <div className='border'>
              Border Countries:
              {
                individual.borders.map((border) => <Border bordername={border}/>)
              }
            </div>
           */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details