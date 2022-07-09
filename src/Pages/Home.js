import React from 'react';
import Country from '../Reuseable/Country';
import { Link } from "react-router-dom";
import './Home.css';
import SearchBox from '../Reuseable/SearchBox';


const Home = ({ home, search, searched, filter, dropDown, selected, individualCountry,}) => {

  const selectedCountry = home.filter(
    (chosen) => chosen.region === selected
  
  )
  console.log(selectedCountry)


  return (
    <div className='bck'>

      <div className='search-help'>
        <SearchBox home={home} search={search} searched={searched} />

        <select placeholder='Find region' className='select-container' aria-label='Filter Countries by Region' onChange={(e) => dropDown(e.target.value)}>
          <option className='option' value=''>Filter by Region</option>
          <option className='option' value='Africa'>Africa</option>
          <option className='option' value='Americas'>America</option>
          <option className='option' value='Asia'>Asia</option>
          <option className='option' value='Europe'>Europe</option>
          <option className='option' value='Oceania'>Oceania</option>
        </select>

      </div>

      <div className='country-container'>
        {
          search.length > 1 ? (
            filter.map(
              (i) => (
                <Link to='/Details' className='link' key={i.name} >
                  <Country name={i.name}
                    individualCountry={individualCountry}
                    data={i}
                  />
                </Link>
              )
            )
          ) :
            (
              home.map(
                (i) => (
                  <Link to='/Details' className='link' key={i.name} >
                    <Country name={i.name}
                      individualCountry={individualCountry}
                      data={i}
                    />
                  </Link>
                )
              )
            )

              &&

              selected === '' ? (
              home.map(
                (i) => (
                  <Link to='/Details' className='link' key={i.name}>
                    <Country name={i.name}
                      individualCountry={individualCountry}
                      data={i}
                    />
                  </Link>
                )
              )
            ) :
              (
                selectedCountry.map(
                  (i) => (
                    <Link to='/Details' className='link' key={i.name}>
                      <Country name={i.name}
                        individualCountry={individualCountry}
                        data={i}
                      />
                    </Link>
                  )
                )
              )





        }
      </div>


    </div>

  )
}

export default Home