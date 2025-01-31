"use client";
import React from "react";

import { FC } from 'react';

interface ProductdataSectionProps {
  title: string;
  details: { label: string; value: string }[];
}

const ProductdataSection: FC<ProductdataSectionProps> = ({ title, details }) => {
    return (
      <div>
        <h2 className="text-md font-bold mb-2">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div key={index}>
              <div className="pb-4">{detail.label}:</div><div className="bg-gray-100 p-2 boder-main-drop-shadow text-sm"> {detail.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductdataSection;
  