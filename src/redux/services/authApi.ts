import { passwordResetSchema, profileInfoSchema } from "@/schemas/authSchemas";
import { baseApi } from "@/redux/services/baseApi";
import userSchema from "@/schemas/userSchema";
import { User } from "@/types/auth";
import { z } from "zod";

type ProfileUpdateRequest = z.infer<typeof profileInfoSchema>;
type PasswordResetRequest = z.infer<typeof passwordResetSchema>;
type UserSchema = z.infer<typeof userSchema>;

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<void, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/account/login",
        method: "POST",
        body: credentials,
      }),
    }),

    signOut: builder.mutation<void, void>({
      invalidatesTags: ["auth-user"],
      query: () => ({
        url: "/account/logout",
        method: "POST",
      }),
    }),

    signUp: builder.mutation<void, UserSchema>({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),

    getAuthUser: builder.query<User, void>({
      providesTags: ["auth-user"],
      query: () => ({
        url: "/account/info",
      }),
    }),

    updateProfile: builder.mutation<void, ProfileUpdateRequest>({
      invalidatesTags: ["auth-user"],
      query: (profile) => ({
        url: "/account/info",
        method: "POST",
        body: profile,
      }),
    }),

    resetPassword: builder.mutation<void, PasswordResetRequest>({
      invalidatesTags: ["auth-user"],
      query: (request) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: {
          currentPassword: request.currentPassword,
          newPassword: request.newPassword,
        },
      }),
    }),
  }),
});

export const {
  useResetPasswordMutation,
  useGetAuthUserQuery,
  useUpdateProfileMutation,
} = authApi;
