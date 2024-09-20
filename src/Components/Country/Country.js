import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const {name, population, flags, flag, } = props.country ;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='countryStyle'>
            <img src = {flags.png} alt="" />
            <h1 className='name'>{name.common} </h1> 
            <h3> {flag} Population: {population}</h3>
            
            
            
            <button onClick={() => handleAddCountry(props.country)}  className='Add-Button'><b>Add New Country</b></button> 
        </div>
    );
};

export default Country;