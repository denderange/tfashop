import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import quizReducer from "./slices/quizSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from './slices/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		quiz: quizReducer,
		filter: filterReducer,
		cart: cartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
setupListeners(store.dispatch)
