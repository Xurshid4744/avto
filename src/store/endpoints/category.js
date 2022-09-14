import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cartestwebapp.herokuapp.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    // Queries
    categoryMarka: build.query({
      query: () => ({
        url: `/category/marka?limit=50&page=1`,
        method: "GET",
      }),
    }),
    categoryById: build.query({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
    // Mutation
    creatCategory: build.mutation({
      query: ({ data }) => ({
        url: `/category`,
        method: "POST",
        body: data,
      }),
    }),
    upDateCategory: build.mutation({
      query: ({ data }) => ({
        url: `/category`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCategory: build.mutation({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useCategoryMarkaQuery,
  useCategoryByIdQuery,
  useCreatCategoryMutation,
  useDeleteCategoryMutation,
  useUpDateCategoryMutation,
} = categoryApi;
