export const initialState = {
	basket: [],
};

// data layer is state
function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			// Logic for adding to basket
			return { ...state, basket: [...state.basket, action.item] };
		case "REMOVE_FROM_BASKET":
			// Logic for adding to basket
			return { state };
		default:
			return state;
	}
}

export default reducer;
