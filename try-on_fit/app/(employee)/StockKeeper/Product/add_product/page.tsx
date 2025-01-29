'use client'

import { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { z } from "zod";
import { ProductSchema, ProductType } from "../../schema";
import { getSuppliers, getCategories, insertProduct } from "../../actions";

// const categories = ["T-Shirts", "Hoodies", "Pants"]; // Example categories
// const suppliers = ["Supplier A", "Supplier B", "Supplier C"]; // Example suppliers

export default function ProductForm() {
  const [ suppliers, setSuppliers ] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const defaultSizes = ["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => ({
    size: size as "S" | "M" | "L" | "XL" | "XXL" | "XXXL", // Explicitly type the size property
    stock_quantity: 0,
  }));

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      product_id: "",
      name: "",
      supplier: "",
      category: "",
      gender: "Male",
      ageGroup: "Adult",
      price: 0,
      variants: [
        {
          variant_id: "",
          color: "",
          design: "",
          description: "",
          img_front: null,
          sizes: defaultSizes,
        },
      ],
    },
  });

  const { fields: variants, append: addVariant, remove: removeVariant } = useFieldArray({
    control,
    name: "variants",
  });

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
    console.log(data);
    const res = await insertProduct(data);
    if (res) {
      alert("Product Added successfully");
      // reset();
    }
    else {
      alert("Error: counldn't add product!");
    }
  };


  useEffect(() => {
    const fetchSuppliers = async () => {
      const supList = await getSuppliers();
      setSuppliers(supList);
    };
  
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategoryOptions(categories);
    }

    fetchSuppliers();
    fetchCategories();
  }, []);


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto"
    >
      <TextField
        label="Product ID"
        {...register("product_id")}
        error={!!errors.product_id}
        helperText={errors.product_id?.message}
        fullWidth
      />
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />
      <Controller
        name="supplier"
        control={control}
        render={({ field }) => (
          <TextField
            label="Supplier"
            select
            {...field}
            error={!!errors.supplier}
            helperText={errors.supplier?.message}
            fullWidth
          >
            {suppliers.map((supplier) => (
              <MenuItem key={supplier} value={supplier}>
                {supplier}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
        <Autocomplete
          disablePortal
          options={categoryOptions}
          getOptionLabel={(option) => (option ? String(option) : "")} // Ensure it returns a string
          onChange={(_, value) => field.onChange(value)} // Handle value selection
          value={field.value || null} // Handle controlled state
          renderInput={(params) => (
            <TextField
              {...params}
              label="Category"
              error={!!errors.category}
              helperText={errors.category?.message}
            />
          )}
        />
        )}
      />

      <RadioGroup row {...register("gender")}>
        {["Male", "Female", "Unisex"].map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      <RadioGroup row {...register("ageGroup")}>
        {["Adult", "Kids",].map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      <TextField
        label="Price"
        type="number"
        {...register("price", { valueAsNumber: true })}
        error={!!errors.price}
        helperText={errors.price?.message}
        fullWidth
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        {variants.map((variant, index) => (
          <div
            key={variant.id}
            className="border p-4 rounded-md shadow-sm space-y-4"
          >
            <TextField
              label="Variant ID"
              {...register(`variants.${index}.variant_id`)}
              error={!!errors.variants?.[index]?.variant_id}
              helperText={errors.variants?.[index]?.variant_id?.message}
              fullWidth
            />
            <TextField
              label="Color"
              {...register(`variants.${index}.color`)}
              error={!!errors.variants?.[index]?.color}
              helperText={errors.variants?.[index]?.color?.message}
              fullWidth
            />
            <TextField
              label="Design"
              {...register(`variants.${index}.design`)}
              error={!!errors.variants?.[index]?.design}
              helperText={errors.variants?.[index]?.design?.message}
              fullWidth
            />
            <TextField
              label="Description"
              {...register(`variants.${index}.description`)}
              error={!!errors.variants?.[index]?.description}
              helperText={errors.variants?.[index]?.description?.message}
              fullWidth
            />
            {/* <TextField
              label="Front Image Name"
              {...register(`variants.${index}.img_front.name`)}
              error={!!errors.variants?.[index]?.img_front?.name}
              helperText={errors.variants?.[index]?.img_front?.name?.message}
              fullWidth
            /> */}
            <label className="block text-sm font-medium text-gray-700">
              Upload Image (Front)
            </label>
            <input
              type="file"
              // accept="image/*"
              {...register(`variants.${index}.img_front`)}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
            {/* {errors.variants?.[index]?.img_front && (
              <p className="text-red-500 text-sm">
                {errors.variants?.[index]?.img_front?.message}
              </p>
            )} */}
            <h4 className="font-semibold">Sizes</h4>
            {variant.sizes?.map((_, sizeIndex) => (
              <div key={sizeIndex} className="flex items-center gap-4">
                <TextField
                  label="Size"
                  {...register(`variants.${index}.sizes.${sizeIndex}.size`)}
                  error={!!errors.variants?.[index]?.sizes?.[sizeIndex]?.size}
                  helperText={
                    errors.variants?.[index]?.sizes?.[sizeIndex]?.size?.message
                  }
                />
                <TextField
                  label="Stock Quantity"
                  type="number"
                  {...register(
                    `variants.${index}.sizes.${sizeIndex}.stock_quantity`,
                    { valueAsNumber: true } // This converts the input to a number
                  )}
                  error={!!errors.variants?.[index]?.sizes?.[sizeIndex]?.stock_quantity}
                  helperText={
                    errors.variants?.[index]?.sizes?.[sizeIndex]?.stock_quantity?.message
                  }
                />
              </div>
            ))}
            <Button
              onClick={() => removeVariant(index)}
              className="bg-red-500 text-white"
            >
              Remove Variant
            </Button>
          </div>
        ))}
        <Button
          onClick={() =>
            addVariant({
              variant_id: "",
              color: "",
              design: "",
              description: "",
              img_front: null,
              sizes: defaultSizes,
            })
          }
          className="bg-blue-500 text-white"
        >
          Add Variant
        </Button>
      </div>
      <Button
        type="submit"
        className="bg-green-500 text-white"
      >
        Submit
      </Button>
    </form>
  );
}