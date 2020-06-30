import React from 'react';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/Cart.css';

export default function Cart({cartItems, removeFromCart, addCount, removeCount}) {
    const items = cartItems.map(item => (
        <CartItem key={item.id} item={item} removeCount={removeCount} addCount={addCount} removeFromCart={removeFromCart}/>
    ));
    return (
        <div className="Cart">
            <h2>Cart</h2>
            <div className="Cart__container">
                <Link to="/">Go Home</Link>
                {items}
            </div>
        </div>
    );
}