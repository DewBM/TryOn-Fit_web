"use client";
import React from "react";

interface ProductDetailsProps {
  label: string;
  value: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ label, value }) => {
  return (
    <div className=" items-center justify-between pb-2- gap-5">
      <div className="font-semibold text-sm">{label}:</div>
      <div className="bg-gray-100 p-2 border-main-drop-shadow text-sm w-[75%]">
        {value}
      </div>
    </div>
  );
};

export default ProductDetails;
