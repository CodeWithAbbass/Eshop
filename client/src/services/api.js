import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_KEY,
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
