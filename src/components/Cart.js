import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

export default function Cart({ cartItems, removeFromCart, addCount, removeCount }) {
	const items = cartItems.map((item) => (
		<CartItem
			key={item.id}
			item={item}
			removeCount={removeCount}
			addCount={addCount}
			removeFromCart={removeFromCart}
		/>
	));
	const total = cartItems.reduce((val, curVal) => {
		return val + curVal.total;
	}, 0);
	return (
		<div className="Cart">
			<h2>Cart</h2>
			{items.length === 0 ? (
				<h3>Sorry, no items in your cart...</h3>
			) : (
				<div className="Cart__container">
					{items}
					<h3>Total: {total}</h3>
				</div>
			)}
		</div>
	);
}
