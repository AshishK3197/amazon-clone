import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<img
				className="checkout__ad"
				src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M12/GW_launch/Sale/18th_March/Set1/D21200796_IN_WLME_SamsungGalaxy_M12_New_Launch_DesktopTallHero_1500x600_4._CB656640200_.jpg"
				alt="add"
			/>
			{basket?.length === 0 ? (
				<div>
					<h2>Your Shopping basket is empty</h2>
					<p>
						You have no items in your basket. To buy one or more items , click
						"Add to basket" next to the item.
					</p>
				</div>
			) : (
				<div>
					<h2 className="checkout__title__notempty">Your Shopping basket</h2>
					{/* List out all the products */}
					{basket?.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Checkout;
