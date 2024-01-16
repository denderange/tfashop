import { createSlice } from "@reduxjs/toolkit";

export interface CartState {

}

const initialState: CartState = {

}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setStore: (state, action) => {

		},
		resetCartStore: () => initialState
	}
})

export const {
	setStore,
	resetCartStore
} = cartSlice.actions

export default cartSlice.reducer