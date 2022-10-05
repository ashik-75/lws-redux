import { apiSlice } from "../api/apiSlice";

const qaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQA: builder.query({
      query: ({ page = 1, search = "" }) =>
        `/api/qa?page=${page}&search=${search}`,
      providesTags: (result) => {
        console.log({ result });
        return result?.data
          ? [
              ...result?.data?.map((q) => ({ type: "qa", id: q._id })),
              { type: "qa", id: "qa-list" },
            ]
          : [{ type: "qa", id: "qa-list" }];
      },
    }),
    getQa: builder.query({
      query: (id) => {
        return {
          url: `/api/qa/${id}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) => [{ type: "qa", id: args }],
    }),
    addQA: builder.mutation({
      query: (data) => {
        return {
          url: "/api/qa",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "qa", id: "qa-list" }],
      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   const result = dispatch(
      //     apiSlice.util.updateQueryData("getAllQA", undefined, (draft) => {
      //       draft.push(args);
      //     })
      //   );
      //   try {
      //     const response = await queryFulfilled;
      //   } catch (error) {
      //     result.undo();
      //   }

      //   console.log("End of try catch");
      // },
    }),
    deleteQa: builder.mutation({
      query: (qaId) => {
        return {
          url: `/api/qa/${qaId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, args) => [
        { type: "qa", id: "qa-list" },
        { type: "qa", id: args },
      ],
    }),
    updateQa: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/api/qa/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, args) => [
        { type: "qa", id: args.id },
        { type: "qa", id: "qa-list" },
      ],
    }),
  }),
});

export const {
  useGetAllQAQuery,
  useAddQAMutation,
  usePrefetch,
  useDeleteQaMutation,
  useUpdateQaMutation,
  useGetQaQuery,
} = qaApi;
