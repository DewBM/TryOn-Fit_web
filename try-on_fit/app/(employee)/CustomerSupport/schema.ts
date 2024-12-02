import { z } from "zod";

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

// Contact number validation
const validatePhoneNumber = (contactNumber: string) => {
  const numb = /^\d{10}$/;
  return numb.test(contactNumber);
};


export const InquiryFormSchema = z.object({

  order_id: z
    .string()
    .min(1, { message: "Order ID cannot be empty" }),

  product_id: z
    .string()
    .min(1, { message: "Product ID cannot be empty" }),

  customer_id: z
    .string()
    .min(1, { message: "Customer ID cannot be empty" }),

  contact_num: z
    .string()
    .min(1, { message: "Contact Number cannot be empty" })
    .refine(validatePhoneNumber, {
      message: "Contact Number must be a 10-digit number",
    }),

  name: z
    .string()
    .min(1, { message: "Name cannot be empty" }),

    issue_type: z
    .enum(["Awaiting and Arrival", "Ordering and payment", "Virtual FitOn", "Refund", "Account Management","Other"], {
      errorMap: () => ({ message: "Please select a valid issue type" }),
    })
    .default("Other"),

    issue_description: z
      .string(),

  //     image: z
  // .any()
  // .refine(
  //   (file) => file instanceof File || (file && typeof file === "object" && file.size <= MAX_IMAGE_SIZE),
  //   { message: "Image must be a valid file and less than 2MB" } // Wrap `message` inside an object
  // ),


      additional_comments: z.string(),
});
