import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			// Any cleanup can go right here... if we have a return in a useEffect ,that means that coode will run after the component is unmounted.(like when App.js is unmounted in this case.)
			// calling unsubscribe will detach the listener from the component if the component is rerendered and attach a new one.
			unsubscribe();
		};
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Navbar />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Navbar />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
