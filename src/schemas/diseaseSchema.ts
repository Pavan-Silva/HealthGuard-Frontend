import { z } from "zod";

export const diseaseSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "must be at least 3 characters long" }),

  description: z
    .string()
    .trim()
    .min(10, { message: "must be at least 10 characters long" }),

  symptoms: z.array(z.number()),
  treatments: z.array(z.number()).optional(),
  transmissionMethods: z.array(z.number()).optional(),
});
