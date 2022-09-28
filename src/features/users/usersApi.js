import { apiSlice } from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/api/users/all`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
