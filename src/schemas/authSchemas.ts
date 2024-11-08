import { z } from "zod";

export const zPassword = z
  .object({
    password: z
      .string()
      .min(8, { message: "must be at least 8 characters long" })
      .max(50, { message: "must be at most 50 characters long" }),
  })
  .refine((data) => !data.password.includes(" "), {
    message: "cannot contain spaces",
    path: ["password"],
  });

export const phoneNumber = z.object({
  phoneNumber: z.string().length(10),
});

export const passwordResetSchema = z
  .object({
    currentPassword: zPassword,
    newPassword: zPassword,
    confirmPassword: zPassword,
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "must be the same as the new password",
        path: ["confirmPassword"],
      });
    }
  });

export const profileInfoSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().length(10),

  name: z
    .string()
    .min(2, { message: "must be at least 2 characters long" })
    .max(50, { message: "must be at most 50 characters long" }),
});
