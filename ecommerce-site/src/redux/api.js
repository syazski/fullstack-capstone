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
    })
});

export const { useRegisterMutation, useLoginMutation } = apiSlice;
