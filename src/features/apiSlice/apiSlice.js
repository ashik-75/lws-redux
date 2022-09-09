import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lws-server-json.herokuapp.com/",
  }),
  tagTypes: ["videos", "video", "relatedVideos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `videos`,
      providesTags: ["videos"],
    }),
    getVideo: builder.query({
      query: (videoId) => `videos/${videoId}`,
      providesTags: (result, error, args) => [{ type: "video", id: args }],
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
      providesTags: (result, error, args) => [
        { type: "relatedVideos", id: args.videoId },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (videoId) => {
        return {
          url: `videos/${videoId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["videos"],
    }),
    editVideo: builder.mutation({
      query: ({ videoId, info }) => {
        return {
          url: `videos/${videoId}`,
          method: "PATCH",
          body: info,
        };
      },
      invalidatesTags: (result, error, args) => [
        "videos",
        { type: "video", id: args.videoId },
        { type: "relatedVideos", id: args.videoId },
      ],
    }),
    addVideo: builder.mutation({
      query: (info) => {
        return {
          url: `videos`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["videos"],
    }),
    addReaction: builder.mutation({
      query: ({ videoId, info }) => {
        console.log({ videoId, info });
        return {
          url: `videos/${videoId}`,
          method: "PATCH",
          body: info,
        };
      },
      invalidatesTags: (result, error, args) => {
        return [{ type: "video", id: args.videoId }];
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
  useAddVideoMutation,
  useAddReactionMutation,
} = apiSlice;
