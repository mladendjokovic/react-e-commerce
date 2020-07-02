import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/Navbar.css';

export default function Navbar() {
	const [ navToggle, setNavToggle ] = useState(false);
	const toggle = () => {
		setNavToggle(!navToggle);
	};
	return (
		<nav className="Navbar">
			<div className={navToggle ? 'Navbar-center active' : 'Navbar-center'}>
				<div className="Navbar-menu">
					<img src={logo} alt="logo" />
					<div className="Navbar-hamburger" onClick={toggle}>
						<span />
						<span />
						<span />
					</div>
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
