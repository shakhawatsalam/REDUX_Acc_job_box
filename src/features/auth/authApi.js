import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log("helloween");
          dispatch(getUser(data.email));
          console.log("lalalalalalalalalalalalalalalalalalal");
        } catch (error) {
          console.log("error");
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
