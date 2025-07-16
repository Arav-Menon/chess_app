import { z } from "zod";

export const signupValidation = z.object({
  userName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "username should not be greater than 15 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export const signinValidation = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
