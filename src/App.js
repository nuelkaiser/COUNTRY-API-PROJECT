import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './Pages/Details';
import Home from './Pages/Home'
import './App.css';
import { useState, useEffect } from 'react';
import Nav from './Reuseable/Nav';

function App() {
  const [country, setcountry] = useState(null);
  const [search,  setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredDropDown, setFilteredDropDown] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(0);

  selectedCountry && (console.log(selectedCountry))

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(data => { return data.json()})
      .then(result => {setcountry(result)})
  }, [country])

  const searched = (chosen) => {
    setSearch(chosen)

    if(search !== '') {
      const filteredCountries = country.filter(
        (unique) => {
          return Object.values(unique).join('').toLowerCase().includes(search.toLowerCase())
        }
      )
      setFilteredCountries(filteredCountries)
    }else {
      setFilteredCountries(country)
    }
  };

  const dropDown = (you) => {
    setSelected(you)    
  }

 
  
  

  return (
    country ? 
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home home={country} search={search} searched={searched} filter={filteredCountries} selected={selected} dropDown={dropDown} filteredDropDown={filteredDropDown} setFilteredDropDown={setFilteredDropDown} setSelectedCountry={setSelectedCountry} />} />
        <Route path="/Details" element={<Details  selectedCountry={selectedCountry} />}/>
      </Routes>
    </BrowserRouter> : 
    <p>Give me a mintute Please?</p>
  );
}

export default App;
