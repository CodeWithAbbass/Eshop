import { api } from "../../api";

export const prodctApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => `product/allproducts`,
    }),
    fetchOne: build.query({
      query: (id) => `product/${id}`,
    }),
  }),
  overrideExisting: false,
});
export const { useLazyFetchOneQuery , useFetchAllProductsQuery } = prodctApi;
