import React from 'react';
import Country from '../Reuseable/Country';
import { Link } from "react-router-dom";
import './Home.css';
import SearchBox from '../Reuseable/SearchBox';
import Display from '../Reuseable/Display';
import DisplayLess from '../Reuseable/DisplayLess';

const Home = ({ home, search, searched, filter, dropDown, selected, individualCountry, click, num, setNum }) => {

  const ShowLess = document.getElementById('id');
  const ShowMore = document.getElementById('more');


  const selectedCountry = home.filter(
    (chosen) => chosen.region === selected

  )


  const setter = () => {
    setNum(num + 4)

    ShowLess.style.display = 'flex'
  }


  const lesser = () => {
    setNum(num - 4)

    if (num === 8) {
      setNum(num)
    }

    ok()
  }

  const ok = () => {
    if (num === 12) {
      ShowLess.style.display = 'none'
    }
  }


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


  console.log(selectedItems.length -1)




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
        <div className='display-cont'>
          <Display id={'more'} click={click} setter={setter} />
          <DisplayLess id={'id'} click={click} lesser={lesser} />
        </div>
      </div>
    </div>

  )
}

export default Home