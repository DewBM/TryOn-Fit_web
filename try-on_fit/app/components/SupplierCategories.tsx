"use client";
import { useState } from "react";
import React from "react";

interface Product {
  product_id:number;
  name: string;
  quantity: number;
  cost: number;
  date: string;
}

interface SupplierCategoriesProps {
  categories: { [key: string]: Product[] };
}

const SupplierCategories: React.FC<SupplierCategoriesProps> = ({
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <section>
        <div className="pt-3 w-full px-2 lg:px-2 font-semibold text-md text-center lg:text-left">
          <div className="mx-1 lg:mx-0 text-lg">Categories</div>
        </div>
        <div className="py-2 w-full px-2 lg:px-10 text-sm flex flex-col lg:flex-row lg:text-left">
          Select a category to view products:
        </div>
      </section>
      <section>
        <div className="p-2 mx-2 lg:mx-20 rounded-lg">
          <div className="my-1 mx-2 lg:mx-10 font-bold text-sm">Categories</div>
          <div className="mx-2 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {Object.keys(categories).map((category) => (
              <div key={category} className="my-3 mx-2 lg:mx-8">
                <label>
                  <input
                    type="radio"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    className="mr-2"
                  />
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="p-5 mx-4 lg:mx-20 rounded-lg bg-white">
          {selectedCategory && (
            <table className="min-w-full">
              <thead>
                <tr>
                <th className="py-2 px-4 border-b font-semibold text-left text-sm  bg-gray-100 border border-gray-200">
                    Product_ID
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-sm  bg-gray-100 border border-gray-200">
                    Product Name
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-sm  bg-gray-100 border border-gray-200">
                    Quantity
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-sm  bg-gray-100 border border-gray-200">
                    Cost
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-sm  bg-gray-100 border border-gray-200">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories[selectedCategory].map((product, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border">{product.product_id}</td>
                    <td className="py-2 px-4 border">{product.name}</td>
                    <td className="py-2 px-4 border">{product.quantity}</td>
                    <td className="py-2 px-4 border">{product.cost}</td>
                    <td className="py-2 px-4 border">{product.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupplierCategories;
