import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Navbar />
						<h1>Checkout</h1>
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
