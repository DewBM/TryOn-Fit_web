import { z } from 'zod';
// Phone number validation
const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

export const EmployeeRegistrationSchema = z.object({

  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
  .string()
  .min(1, { message: "Phone number cannot be empty" })
  .refine(validatePhoneNumber, {
    message: "Phone number must be a 10-digit number",
  }),
  employeeRole: z.enum(["CusSupport", "DisCoordinator", "Stockkeeper"]).refine(val => val !== undefined, {
    message: "Employee role is required",
  }),
  gender: z.enum(["male", "female", "other"]).refine(val => val !== undefined, {
    message: "Gender is required",
  }),
  streetAddress: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  stateProvince: z.string().min(1, { message: "State/Province is required" }),
});

export const supplierRegistrationSchema = z.object({
  supid: z.string().min(1, "Supplier ID is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, { message: "Phone number cannot be empty" })
    .refine(validatePhoneNumber, {
      message: "Phone number must be a 10-digit number",
    }),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender is required" })
  }),
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
});

console.log("EmployeeRegistrationSchema");
