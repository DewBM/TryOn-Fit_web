import { z } from "zod";

const VariantSchema = z.object({
    variant_id: z.string().min(1, { message: "Variant ID is required" }),
    color: z.string().min(1, { message: "Color is required" }),
    design: z.string().min(1, { message: "Design is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    img_front: z.any(),
    sizes: z.array(
      z.object({
        size: z.enum(["S", "M", "L", "XL", "XXL", "XXXL"]),
        stock_quantity: z.number().nonnegative({ message: "Stock quantity must be a positive number" }),
      })
    ),
  });
  

export const ProductSchema = z.object({
    product_id: z.string().min(1, { message: "Product ID is required" }),
    name: z.string().min(1, { message: "Product name is required" }),
    supplier: z.string().min(1, { message: "Supplier is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    gender: z.enum(["Male", "Female", "Unisex"], { message: "Invalid gender" }), // Use appropriate gender values
    ageGroup: z.enum(["Adult", "Kids"], { message: "Invalid age group" }), // Adjust values to match `ageGroupEnum`
    price: z.number().nonnegative({ message: "Price must be a positive number" }),
    variants: z.array(VariantSchema),
});

export type ProductType = z.infer<typeof ProductSchema>;