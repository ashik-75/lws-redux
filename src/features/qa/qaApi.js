import { apiSlice } from "../api/apiSlice";

const qaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQA: builder.query({
      query: () => "/api/qa",
    }),
    addQA: builder.mutation({
      query: (data) => {
        return {
          url: "/api/qa",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        console.log("starting onQuery....");
        const result = dispatch(
          apiSlice.util.updateQueryData("getAllQA", undefined, (draft) => {
            draft.push(args);
          })
        );
        try {
          console.log("Before response...");
          const response = await queryFulfilled;
          console.log("after response...");

          console.log("with response ", response);

          console.log("After final response");
        } catch (error) {
          result.undo();
        }

        console.log("End of try catch");
      },
    }),
  }),
});

export const { useGetAllQAQuery, useAddQAMutation } = qaApi;
