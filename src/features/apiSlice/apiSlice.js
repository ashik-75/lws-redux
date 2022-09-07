import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "videos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lws-server-json.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `videos`,
    }),
    getVideo: builder.query({
      query: (videoId) => `videos/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ videoId, title }) => {
        let queryString = "?";
        if (title) {
          queryString += title
            .split(" ")
            .map((t) => `title_like=${t}`)
            .join("&");
        }
        if (videoId) {
          queryString += `&id_ne=${videoId}`;
        }
        queryString += "&_limit=5";

        return `videos${queryString}`;
      },
    }),
    deleteVideo: builder.mutation({
      query: (videoId) => `videos/${videoId}`,
    }),
    editVideo: builder.mutation({
      query: ({ videoId, info }) => {
        return {
          url: `videos/${videoId}`,
          method: "PATCH",
          body: info,
        };
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useDeleteVideoMutation,
  useEditVideoMutation,
} = apiSlice;
