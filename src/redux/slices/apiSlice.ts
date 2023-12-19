import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = "https://fakestoreapi.com/products"

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: base_url }),
	endpoints: (builder) => ({
		fetchAllProducts: builder.query({
			query: () => ""
		}),
		fethcProductById: builder.query({
			query: (id) => `/${id}`
		})
	})
});

export const { useFetchAllProductsQuery, useFethcProductByIdQuery } = apiSlice