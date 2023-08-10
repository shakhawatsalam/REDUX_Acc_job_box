import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
    }),
    getJob: builder.query({
      query: () => ({
        url: "/jobs",
      }),
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
  }),
});

export const { usePostJobMutation, useGetJobQuery, useGetSingleJobQuery } =
  jobApi;
