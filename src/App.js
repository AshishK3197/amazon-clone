import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Navbar />
						<Checkout />
					</Route>
					<Route path="/login">
						<h1>Login Page</h1>
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
