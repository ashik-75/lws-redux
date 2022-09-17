import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        body: data,
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;

        localStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken: result.data.accessToken,
            user: result.data.user,
          })
        );

        dispatch(userLoggedIn(result.data));
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
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
              accessToken: result.data.accessToken,
              user: result.data.user,
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
