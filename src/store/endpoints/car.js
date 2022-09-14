import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "cars/api",
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
    allCars: build.query({
      query: ({ page, categoryId }) => ({
        url: `/car?limit=5`,
        method: "GET",
        params: {
          page,
        },
      }),
    }),
    carsById: build.query({
      query: ({ id }) => ({
        url: `/car/${id}`,
        method: "GET",
      }),
    }),
    carsByCategoryId: build.query({
      query: ({ categoryId }) => ({
        url: `/car?limit=50&page=1`,
        method: "GET",
        params: {
          categoryId,
        },
      }),
    }),
    // Mutations
    createCar: build.mutation({
      query: ({ data }) => ({
        url: `/car`,
        method: "POST",
        body: data,
      }),
    }),
    deleteCar: build.mutation({
      query: ({ id }) => ({
        url: `/car/${id}`,
        method: `DELETE`,
      }),
    }),
    upDateCar: build.mutation({
      query: ({ data }) => ({
        url: `/car`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAllCarsQuery,
  useCarsByCategoryIdQuery,
  useCarsByIdQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useUpDateCarMutation,
} = carsApi;
