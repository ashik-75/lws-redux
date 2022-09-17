import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:9000/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.accessToken;
      console.log({ token });

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [""],
  endpoints: (builder) => ({}),
});
