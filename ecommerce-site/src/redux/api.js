import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com"
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (registerUser) => ({
                url: "/users",
                method: "POST",
                body: registerUser,  
            }),
        }),
        login: builder.mutation({
            query: (loginUser) => ({
                url: "/auth/login",
                method: "POST",
                body: loginUser,
            }),
        }),
        fetchProducts: builder.query({
            query: () => "/products",
        }),
        account: builder.query({
            query: (token) => ({
               url: "/users/",
               headers: {
                authorization: `Bearer ${token}`,
                }, 
            }),
        }),
        }),
    });

export const { 
useRegisterMutation, 
useLoginMutation,
useFetchProductsQuery,
useAccountQuery } = apiSlice;
