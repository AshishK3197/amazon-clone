import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/SNS/DYK/2019/SNS/DYK_SNS_header_pc_1500x200.jpg"
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
			{basket?.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
