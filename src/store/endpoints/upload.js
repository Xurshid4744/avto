import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Upload = createApi({
  reducerPath: "upload",
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
    upload: build.mutation({
      query: ({ form }) => ({
        url: `/upload`,
        method: `POST`,
        body: form,
      }),
    }),
  }),
});
export const { useUploadMutation } = Upload;
