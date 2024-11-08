import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: [
    "auth-user",
    "diseases",
    "symptoms",
    "treatments",
    "transmission-methods",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    credentials: "include",
  }),

  endpoints: () => ({}),
});
