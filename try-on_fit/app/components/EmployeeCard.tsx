"use client";
import React from "react";
import Image from "next/image";
import { FC } from 'react';

interface EmployeeCardProps {
    photo: string;
    name: string;
    title: string;
    details: { label: string; value: string }[];
  }

  const EmployeeCard: FC<EmployeeCardProps> = ({ photo, name, title, details }) => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="text-center">
        <Image
          src={photo}
          alt={name}
          width={120}
          height={120}
          className="rounded-md mx-auto"
        />
        <div className="text-md  mt-2">{name}</div>
        <span className="text-main-dark text-sm">{title}</span>
      </div>
      <div className="mt-4 space-y-2">
        {details.map((detail, index) => (
          <div key={index}>
            <div>{detail.label}:</div><div className="bg-gray-100 p-2 boder-main-drop-shadow text-sm"> {detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
