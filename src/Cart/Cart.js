import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum+country.population, 0);
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            <h3>Total Population: {totalPopulation} </h3>
        </div>
    );
};

export default Cart;