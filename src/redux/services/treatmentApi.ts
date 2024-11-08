import { Treatment } from "@/types/disease";
import { baseApi } from "./baseApi";

const treatmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTreatments: build.query<Treatment[], void>({
      providesTags: ["treatments"],
      query: () => ({
        url: `/treatments`,
      }),
    }),

    getTreatment: build.query<Treatment, number>({
      providesTags: ["treatments"],
      query: (id) => ({
        url: `/treatments/${id}`,
      }),
    }),

    createTreatment: build.mutation<Treatment, Treatment>({
      invalidatesTags: ["treatments"],
      query: (treatment) => ({
        url: `/treatments`,
        method: "POST",
        body: treatment,
      }),
    }),

    updateTreatment: build.mutation<Treatment, Treatment>({
      invalidatesTags: ["treatments"],
      query: (treatment) => ({
        url: `/treatments/${treatment.id}`,
        method: "PUT",
        body: treatment,
      }),
    }),

    deleteTreatment: build.mutation<void, number>({
      invalidatesTags: ["treatments"],
      query: (id) => ({
        url: `/treatments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTreatmentQuery,
  useCreateTreatmentMutation,
  useUpdateTreatmentMutation,
  useDeleteTreatmentMutation,
} = treatmentApi;
