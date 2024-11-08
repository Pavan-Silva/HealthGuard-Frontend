import { diseaseSchema } from "@/schemas/diseaseSchema";
import { baseApi } from "@/redux/services/baseApi";
import { Disease } from "@/types/disease";
import { PaginatedList } from "@/types";
import { z } from "zod";

type DiseaseSchema = z.infer<typeof diseaseSchema>;

const diseaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDiseases: builder.query<PaginatedList<Disease>, void>({
      providesTags: ["diseases"],
      query: () => "/diseases",
    }),

    getDisease: builder.query<Disease, number>({
      providesTags: ["diseases"],
      query: (id) => `/diseases/${id}`,
    }),

    createDisease: builder.mutation<void, DiseaseSchema>({
      invalidatesTags: ["diseases"],
      query: (disease) => ({
        url: "/diseases",
        method: "POST",
        body: disease,
      }),
    }),

    updateDisease: builder.mutation<void, { id: number } & DiseaseSchema>({
      invalidatesTags: ["diseases"],
      query: ({ id, ...disease }) => ({
        url: `/diseases/${id}`,
        method: "PUT",
        body: disease,
      }),
    }),

    deleteDisease: builder.mutation<void, number>({
      invalidatesTags: ["diseases"],
      query: (id) => ({
        url: `/diseases/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDiseasesQuery,
  useGetDiseaseQuery,
  useCreateDiseaseMutation,
  useUpdateDiseaseMutation,
  useDeleteDiseaseMutation,
} = diseaseApi;
