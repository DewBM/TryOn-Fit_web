import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(1, { message: "password cannot be empty" }),
});

export const SignUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
  password: z.string().min(1, { message: "password cannot be empty" }),
  passwordConfirm: z.string().min(1, { message: "password cannot be empty" }),
});
