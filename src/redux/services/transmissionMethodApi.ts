import { TransmissionMethod } from "@/types/disease";
import { baseApi } from "./baseApi";

const transmissionMethodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransmissionMethods: builder.query<TransmissionMethod[], void>({
      providesTags: ["transmission-methods"],
      query: () => "/transmission-methods",
    }),
  }),
});

export const { useGetTransmissionMethodsQuery } = transmissionMethodApi;
