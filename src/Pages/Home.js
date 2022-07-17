import React from 'react';
import Country from '../Reuseable/Country';
import { Link } from "react-router-dom";
import './Home.css';
import SearchBox from '../Reuseable/SearchBox';
import Display from '../Reuseable/Display';

const Home = ({ home, search, searched, filter, dropDown, selected, individualCountry, click, num, setNum }) => {

  const selectedCountry = home.filter(
    (chosen) => chosen.region === selected

  )


  const setter = () => {
      setNum(num + 4)
  }
  console.log(num)


  const homeItems = home.slice(0, num).map(
    (i) => (
      <Link to='/Details' className='link' key={i.name} >
        <Country name={i.name}
          individualCountry={individualCountry}
          data={i}
          click={click}
        />
      </Link>
    )
  )

  const selectedItems = selectedCountry.slice(0, num).map(
    (i) => (
      <Link to='/Details' className='link' key={i.name} >
        <Country name={i.name}
          individualCountry={individualCountry}
          data={i}
          click={click}
        />
      </Link>
    )
  )

 


  return (
    <div className='hidden'>
      <div className={click ? 'bck-light' : 'bck'}>

        <div className='search-help'>
          <SearchBox home={home} search={search} searched={searched} click={click} />

          <select placeholder='Find region' className={click ? 'select-light' : 'select-container'} aria-label='Filter Countries by Region' onChange={(e) => dropDown(e.target.value)}>
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
                      click={click}
                    />
                  </Link>
                )
              )
            ) :
              (
                homeItems
              )

                &&

                selected === '' ? (
                homeItems
              ) :
                (
                 selectedItems
                )

          }
        </div>
        <Display setter={setter}/>
      </div>
    </div>

  )
}

export default Home