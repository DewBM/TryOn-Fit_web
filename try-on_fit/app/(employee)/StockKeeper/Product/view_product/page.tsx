"use client";
import React from "react";
import ProductDetails from "@/app/components/ProductDetail";
import SizeColorTable from "@/app/components/SizeColorTable";
import SizesTable from "@/app/components/T-shirtSizesTable";

const ProductPage = () => {
  const productInfo = {
    product_id: "1234",
    supplier_id: "S01",
    product_name: "red frock",
    catergory: "Frock",
    quantity: "49",
    description: "Korean style t-shirt",
    colours: "red",
    gender: "Female",
    age_category: "Adult",
    image:"./images/red.png",
  };

  return (
    <div className="container mx-auto p-0">
      <h1 className="text-lg font-semibold mb-5">Product Details</h1>
      <div className="grid grid-cols-[1fr_3fr] gap-4">
        <div className="border rounded-md">
        <img
        src="/images/red.png"
        className="w-full h-auto rounded-md mt-12"
      />
        </div>
        <div className="border rounded-md">
          <div className="grid grid-cols-2 gap-2 p-6">
            <ProductDetails label="Product ID" value={productInfo.product_id} />
            <ProductDetails
              label="Supplier ID"
              value={productInfo.supplier_id}
            />
            <ProductDetails
              label="Product Name"
              value={productInfo.product_name}
            />
            <ProductDetails label="Catergory" value={productInfo.catergory} />
            <ProductDetails label="Quantity" value={productInfo.quantity} />
            <ProductDetails label="Colour" value={productInfo.colours} />
            <ProductDetails label="Gender" value={productInfo.gender} />
            <ProductDetails
              label="Age Category"
              value={productInfo.age_category}
            />
          </div>
          <div className=" ml-7 w-100% mb-2">
            <ProductDetails
              label="Description"
              value={productInfo.description}
            />
          </div>
        </div>
      </div>
      <h1 className="text-md font-semibold m-5">
        Available sizes,Colours and Quantity
      </h1>
      <div className="border rounded-md mt-2 justify-center items-center">
        <SizeColorTable />
      </div>
      <h1 className="text-md font-semibold m-5">Measurements and sizes</h1>
      <div className="border rounded-md mt-2 justify-center items-center"><SizesTable /></div>
    </div>
  );
};

export default ProductPage;
