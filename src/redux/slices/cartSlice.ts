import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
	productTitle: string,
	productQuantity: number,
	size: number,
	price: number
}

const initialState: CartState[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existItem = state.find(item => item.productTitle === action.payload.productTitle
			)

			if (!existItem) {
				state.push(action.payload)
			}
		},
		updateProductQuantity: (state, action) => {
			const existItem = state.find(item => item.productTitle === action.payload.productTitle
			)

			if (existItem?.productQuantity) {
				console.log(existItem.productQuantity)
			}
		},
		removeFromCart: (state, action) => {
			state = state.filter(item => item.productTitle !== action.payload)
		},
		resetCartStore: () => initialState
	}
})

export const {
	addToCart,
	removeFromCart,
	resetCartStore
} = cartSlice.actions

export default cartSlice.reducer