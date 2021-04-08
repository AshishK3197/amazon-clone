import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
function Navbar() {
	const login = () => {
		if (user) {
			auth.signOut();
		}
	};
	// state,dispatch
	const [{ basket, user }] = useStateValue();
	console.log(basket);
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
				<Link to={!user && "/Login"} className="navbar__link">
					<div onClick={login} className="navbar__links__text">
						<span className="navbar__links__text__lineOne">
							Hello {user?.email}
						</span>
						<span className="navbar__links__text__lineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
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
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
