"use client";
import React, { FC } from "react";

interface SupplierpersonalDetailsSectionProps {
  title: string;
  details: { label: string; value: string }[];
}

const SupplierpersonalDetailsSection: FC<SupplierpersonalDetailsSectionProps> = ({ title, details }) => {
  return (
    <div className="w-full max-w-3xl"> {/* Increased width */}
      <h2 className="text-md font-bold mb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Adjusted gap size */}
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col">
            <div className="pb-1 font-medium">{detail.label}:</div>
            <div className="bg-gray-100 p-3 border border-gray-300 rounded-md shadow-sm text-sm">
              {detail.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierpersonalDetailsSection;
