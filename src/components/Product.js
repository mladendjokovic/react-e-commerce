import React from 'react';
import '../styles/Product.css';

export default function Product({item, history, addToCart}){
    const {img, id, title, price} = item;
    const handleClick = () => {
        history.push(`/details/${id}`);
    };
    const productAddToCart = e => {
        e.stopPropagation();
        addToCart(id);
        item.inCart = true;
    }
    return(
        <div className="Product" onClick={handleClick}>
            <div className="Product__image">
                <img src={img} alt={title} />
                { item.inCart ? 
                  <span className="Product__addToCart">Added to cart</span>
                : <span className="Product__addToCart" onClick={productAddToCart}>Add to cart</span>
                }
            </div>
            <div className="Product__title">
                <h3>{title}</h3>
                <h3>${price}</h3>
            </div>
        </div>
    );
}