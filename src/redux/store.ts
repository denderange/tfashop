import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { quizSlice } from "./slices/quizSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		[quizSlice.reducerPath]: quizSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
setupListeners(store.dispatch)
