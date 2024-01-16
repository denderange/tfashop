import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
	price: { min: number, max: number }
	gender: string,
	size: number,
}

const initialState: FilterState = {
	price: { min: 0, max: 10000 },
	gender: '',
	size: 0,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilterStore: (state, action) => {
			state.price = action.payload.price;
			state.gender = action.payload.gender;
			state.size = action.payload.size;
		},
		resetFilterStore: () => initialState
	}
})

export const {
	setFilterStore,
	resetFilterStore
} = filterSlice.actions

export default filterSlice.reducer