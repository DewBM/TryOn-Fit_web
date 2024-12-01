import { z } from "zod";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

// Contact number validation
const validatePhoneNumber = (contactNumber: string) => {
  const numb = /^\d{10}$/;
  return numb.test(contactNumber);
};


export const InquiryFormSchema = z.object({

  orderId: z
    .string()
    .min(1, { message: "Order ID cannot be empty" }),

  productId: z
    .string()
    .min(1, { message: "Product ID cannot be empty" }),

  customerId: z
    .string()
    .min(1, { message: "Customer ID cannot be empty" }),

  contactNumber: z
    .string()
    .min(1, { message: "Contact Number cannot be empty" })
    .refine(validatePhoneNumber, {
      message: "Contact Number must be a 10-digit number",
    }),

  name: z
    .string()
    .min(1, { message: "Name cannot be empty" }),

    issue: z
    .enum(["Awaiting and Arrival", "Ordering and payment", "Virtual FitOn", "Refund", "Account Management","Other"], {
    //   errorMap: () => ({ message: "Please select a valid issue type" }),
    })
    .default("Other"),

    issuedescription: z
      .string(),

      image: z
      .any()
      .refine(
        (file) => file instanceof File && file.size <= MAX_IMAGE_SIZE,
        {
          message: "Image must be a valid file and less than 2MB",
        }
      ),

      additionalComments: z.string(),
});
