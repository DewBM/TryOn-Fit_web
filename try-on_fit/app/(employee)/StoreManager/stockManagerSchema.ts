import { z } from 'zod';
console.log("EmployeeRegistrationSchema");

export const EmployeeRegistrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  employeeRole: z.enum(["CusSupport", "DisCoordinator", "Stockkeeper"], {
    required_error: "Employee role is required",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
});
