"use client";
import React from "react";
import TextBox from "@/app/components/TextBox";
import TextB_Dsble from "@/app/components/TextB_Dsble";

export default function ViewProduct() {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-lg font-semibold mb-5">Product details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="sm:col-span-1 border p-4"></div>
        <div className="sm:col-span-3 border p-4">
          <div className="text-md font-semibold">General Information </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
          <div className="bg-main  lg:col-span-4 sm:col-span-2 lg:col-start-7 mb-4 "></div>
        </div>
      </div>
    </div>
  );
}
