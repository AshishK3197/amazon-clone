import React, { createContext, useContext, useReducer } from "react";

// setup data layer
// We need this to track the basket

// This is the data layer
export const StateContext = createContext();

// Build a provider to wrap entire app into this provider and guve it to this data layer that we created above
export const StateProvider = ({ reducer, initialState, children }) => {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};

// use in a components
export const useStateValue = () => useContext(StateContext);
