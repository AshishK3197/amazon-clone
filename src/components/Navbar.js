import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img
					className="navbar__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon"
				/>
			</Link>
			<div className="navbar__searchbox">
				<input type="text" className="navbar__searchInput" />
				<SearchIcon className="navbar__searchIcon" />
			</div>

			<div className="navbar__linkoptions">
				<Link to="/Login" className="navbar__link">
					<div className="navbar__links__text">
						<span className="navbar__links__text__lineOne">Hello Ashish</span>
						<span className="navbar__links__text__lineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/" className="navbar__link">
					<div className="navbar__links__text">
						<span className="navbar__links__text__lineOne">Returns</span>
						<span className="navbar__links__text__lineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/" className="navbar__link">
					<div className="navbar__links__text">
						<span className="navbar__links__text__lineOne">Your</span>
						<span className="navbar__links__text__lineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="navbar__link">
					<div className="navbar__links__basket">
						<ShoppingBasketIcon />
						<span className="navbar__links__text__lineTwo basket__count">
							0
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
