import React from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';
import '../styles/ProductList.css';

export default function ProductList({data, history, addToCart}) {
    const list = data.map(item => (
        <Product key={item.id} item={item} history={history} addToCart={addToCart} />
    ))
    return(
        <div className="ProductList">
            <Link to="/cart">Cart</Link>
            <h1>Our Products</h1>
            <div className="ProductList__container">
                {list}
            </div>
        </div>
    );
}