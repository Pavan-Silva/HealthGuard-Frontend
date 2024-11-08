import { zPassword } from "@/schemas/authSchemas";
import { z } from "zod";

const userSchema = z.object({
  phoneNumber: z.string().length(10),
  email: z.string().email({ message: "must be a valid email address" }),

  firstName: z
    .string()
    .trim()
    .min(2, { message: "must be at least 2 characters long" })
    .max(30, { message: "must be at most 30 characters long" }),

  lastName: z
    .string()
    .trim()
    .min(2, { message: "must be at least 2 characters long" })
    .max(30, { message: "must be at most 30 characters long" }),

  password: zPassword,
});

export default userSchema;
