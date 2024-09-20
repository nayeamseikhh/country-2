import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Cart/Cart';
import Search from './Search/Search';

function App() {
const [countries, setCountry] = useState([]);
const [cart, setCart] = useState([]);
const [filteredCountries, setFilteredCountries] = useState([]);

useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {setCountry(data);
    // console.log(data);
  })
}, [])

const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
}

const handleSearch = (searchValue) => {
  let value = searchValue.toLowerCase();
  const newCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.startsWith(value)
  });
  setFilteredCountries(newCountries);
}
  return (
    <div className="App">
    <h1> Total Country = {countries.length}</h1>
    <Search onSearch = {handleSearch }></Search>
    <Cart cart = {cart}></Cart>
  
    {
      countries.map(country => <Country country = {country} key={country.name.common} handleAddCountry={handleAddCountry} countries={filteredCountries}  ></Country>)
    }
    </div>
  );
}

export default App;
