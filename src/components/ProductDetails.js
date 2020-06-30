import React from 'react';
import '../styles/ProductDetails.css';

export default function ProductDetails({data}) {
    return(
        <div className="ProductDetails">
            <h2>{data.title}</h2>
            <div className="ProductDetails__container">
                <div className="ProductDetails__image">
                    <img src={data.img} alt={data.title} />
                </div>
                <div className="ProductDetails__info">
                    <h3>Model: {data.title}</h3>
                    <h4>Made by: {data.company}</h4>
                    <h4>Price: ${data.price}</h4>
                    <h5>Info:</h5>
                    <p>{data.info}</p>
                </div>
            </div>
        </div>
    );
}