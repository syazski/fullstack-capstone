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
        accountDetails: builder.query({
            query: (id) => ({
                url:`/users/${id}`,
            })
        }),
        //fetch all Users
        fetchUsers: builder.query({
            query: () => ({
                url:`/users`,
            }),
        }),
        //get product details
        productDetails: builder.query({
            query: ({id}) => ({
                url:`/products/${id}`,
            })
        }),
        //get cart details
    }),
});

export const { 
useRegisterMutation, 
useLoginMutation,
useFetchProductsQuery,
useAccountQuery,
useAccountDetailsQuery,
useFetchUsersQuery,
useProductDetailsQuery } = apiSlice;
