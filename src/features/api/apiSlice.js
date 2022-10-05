import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { tokenReceived, userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:8001`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error && result?.error?.status === 401) {
      const refreshToken = api.getState()?.auth?.refreshToken;
      console.log({ refreshToken });
      const refreshResult = await axios.post(
        "http://localhost:7000/api/auth/refresh",
        {
          refreshToken,
        }
      );

      console.log({ refreshResult });

      if (refreshResult) {
        api.dispatch(tokenReceived(refreshResult.data));
        localStorage.setItem("auth", JSON.stringify(refreshResult.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(userLoggedOut());
        localStorage.removeItem("auth");
      }
    }

    return result;
  },
  tagTypes: ["qa"],
  endpoints: (builder) => ({}),
});
