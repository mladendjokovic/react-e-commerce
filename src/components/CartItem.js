import React from 'react';
import '../styles/CartItem.css';

export default function CartItem({item, removeFromCart, addCount, removeCount}) {
    return (
        <div className="CartItem">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            <div className="CartItem__count">
                {  item.count >= 1 ?
                   <span onClick={() => removeCount(item.id)}>-</span>
                 : <span onClick={() => removeFromCart(item.id)}>-</span>
                 }
                <span>{item.count}</span>
                <span onClick={() => addCount(item.id)}>+</span>
            </div>
            <button onClick={() => removeFromCart(item.id)}>remove</button>
            <h4>{item.total}</h4>
        </div>
    );
}