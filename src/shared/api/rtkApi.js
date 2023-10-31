import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users?_limit=6",
        method: "GET",
      }),
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    updateUserData: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserDataMutation,
} = rtkApi;
