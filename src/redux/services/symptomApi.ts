import { baseApi } from "@/redux/services/baseApi";
import { Symptom } from "@/types/disease";
import { PaginatedList } from "@/types";

const symptomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSymptoms: builder.query<PaginatedList<Symptom>, void>({
      providesTags: ["symptoms"],
      query: () => "/symptoms",
    }),

    getSymptom: builder.query<Symptom, number>({
      providesTags: ["symptoms"],
      query: (id) => `/symptoms/${id}`,
    }),

    createSymptom: builder.mutation<void, Symptom>({
      invalidatesTags: ["symptoms"],
      query: (symptom) => ({
        url: "/symptoms",
        method: "POST",
        body: symptom,
      }),
    }),

    updateSymptom: builder.mutation<void, { id: number } & Symptom>({
      invalidatesTags: ["symptoms"],
      query: ({ id, ...symptom }) => ({
        url: `/symptoms/${id}`,
        method: "PUT",
        body: symptom,
      }),
    }),

    deleteSymptom: builder.mutation<void, number>({
      invalidatesTags: ["symptoms"],
      query: (id) => ({
        url: `/symptoms/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSymptomsQuery,
  useGetSymptomQuery,
  useCreateSymptomMutation,
  useUpdateSymptomMutation,
  useDeleteSymptomMutation,
} = symptomApi;
