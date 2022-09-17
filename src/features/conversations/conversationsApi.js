import { apiSlice } from "../api/apiSlice";

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    conversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamps&_order=desc&_limit=5`,
        method: "GET",
      }),
    }),
  }),
});

export const { useConversationsQuery } = conversationApi;
