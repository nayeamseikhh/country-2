import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Cart/Cart';

function App() {
const [countries, setCountry] = useState([]);
const [cart, setCart] = useState([]);

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
  return (
    <div className="App">
    <h1> Total Country = {countries.length}</h1>
    <Cart cart = {cart}></Cart>
  
    {
      countries.map(country => <Country country = {country} key={country.name.common} handleAddCountry={handleAddCountry}  ></Country>)
    }
    </div>
  );
}

export default App;
