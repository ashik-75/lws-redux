import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        body: data,
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;

        localStorage.setItem(
          "auth",
          JSON.stringify({
            refreshToken: result.data?.refreshToken,
            accessToken: result.data.accessToken,
            email: result.data.email,
          })
        );

        dispatch(userLoggedIn(result.data));
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log({ result });

          localStorage.setItem(
            "auth",
            JSON.stringify({
              refreshToken: result.data.refreshToken,
              accessToken: result.data.accessToken,
              email: result.data.email,
            })
          );

          dispatch(userLoggedIn(result.data));
        } catch (error) {
          console.log({ err: error?.message });
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
