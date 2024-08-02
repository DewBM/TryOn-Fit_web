"use client";
import React from "react";
import Image from "next/image";
import { FC } from "react";

interface SupplierCardProps {
  name: string;
  title: string;
  details: { label: string; value: string }[];
}

const SupplierCard: FC<SupplierCardProps> = ({ name, title, details }) => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="text-left">
        <div className="text-md font-bold  mt-2">{name}</div>
        <span className="text-main-dark text-sm">{title}</span>
      </div>
      <div className="mt-4 space-y-2">
        {details.map((detail, index) => (
          <div key={index}>
            <div>{detail.label}:</div>
            <div className="bg-gray-100 p-2 boder-main-drop-shadow text-sm">
              {" "}
              {detail.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierCard;
