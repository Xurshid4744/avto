import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const login = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cartestwebapp.herokuapp.com",
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ data }) => ({
        url: `/employee/login`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});
export const { useLoginMutation } = login;
