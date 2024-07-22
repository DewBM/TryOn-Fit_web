import { z } from "zod";

// Password validation
const validatePassword = (password: string) => {
  if (password.length < 8) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[~!@#$%^\*-_=\+[\]{\}\/;:,\.?]/.test(password);
  return hasUpperCase && hasLowerCase && hasDigit && hasSymbol;
};

// Phone number validation
const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

export const SignUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    gender: z.string(),
    email: z.string().email(),
    phoneNumber: z
      .string()
      .min(1, { message: "Phone number cannot be empty" })
      .refine(validatePhoneNumber, {
        message: "Phone number must be a 10-digit number",
      }),
    address: z.string(),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty" })
      .refine(validatePassword, {
        message:
          "Password must be 8+ chars, with uppercase, lowercase, digit, and symbol",
      }),
    passwordConfirm: z
      .string()
      .min(1, { message: "Password confirmation cannot be empty" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match",
    path: ["passwordConfirm"], 
  });
