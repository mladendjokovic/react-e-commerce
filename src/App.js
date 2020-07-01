import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { storeProducts } from './data';

function App() {
	const [ products, setProducts ] = useState(storeProducts);
	const [ cart, setCart ] = useState([]);
	const details = (id) => {
		return products.find((item) => item.id === parseInt(id));
	};
	const addToCart = (id) => {
		const cartItem = products.find((item) => item.id === parseInt(id));
		setCart([ ...cart, { ...cartItem, count: 1, total: cartItem.price } ]);
	};
	const removeFromCart = (id) => {
		setProducts(products.map((item) => (item.id === id ? { ...item, inCart: false } : item)));
		const newCart = cart.filter((item) => item.id !== parseInt(id));
		setCart(newCart);
	};
	const addCount = (id) => {
		setCart(
			cart.map(
				(item) =>
					item.id === id ? { ...item, count: item.count + 1, total: (item.count + 1) * item.price } : item
			)
		);
	};
	const removeCount = (id) => {
		setCart(
			cart.map(
				(item) =>
					item.id === id ? { ...item, count: item.count - 1, total: (item.count - 1) * item.price } : item
			)
		);
	};
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route
					exact
					path="/"
					render={(routeProps) => <ProductList {...routeProps} data={products} addToCart={addToCart} />}
				/>
				<Route
					exact
					path="/details/:id"
					render={(routeProps) => <ProductDetails data={details(routeProps.match.params.id)} />}
				/>
				<Route
					exact
					path="/cart"
					render={() => (
						<Cart
							removeCount={removeCount}
							cartItems={cart}
							addCount={addCount}
							removeFromCart={removeFromCart}
						/>
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
