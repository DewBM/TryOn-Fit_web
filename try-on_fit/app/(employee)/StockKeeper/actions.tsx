import { parseWithZod } from "@conform-to/zod";
import { ProductSchema, ProductType } from "./schema";
import { customFetch } from "../../utils/auth";

export async function insertProduct(data: ProductType) {
     const params = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     };
  
      const resp = await customFetch("/products/product_insert", params);
      console.log('New Response: ', resp);
     
     if (resp) {
        if (resp.isSuccess) {
            console.log("Productg added successfully");
           return true;
        }
        else {
            console.log("Couldn't insert product");
            return false;
        }
    }
    else {
        console.log("Couldn't insert product");
        return false;
    }
}

export async function getSuppliers() {
    const resp = await customFetch("/supplier", {});

    if (resp) {
        return resp.map((supplier: { supplier_id: string; }) => supplier.supplier_id);
    }
    else {
        console.log("Suppliers not fetched from backend");
        return ["None"];
    }
}

export async function getCategories() {
    const resp = await customFetch("/products/categories", {});

    if (resp) {
        return resp.map((category: { category_type: string; }) => category.category_type);
    }
    else {
        console.log("Categories not fetched from backend");
        return ["None"];
    }
}