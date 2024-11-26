"use client";
import React, { useState } from "react";
import Layout from "./layout";
import Button from "@/app/components/Button";

export default function InquiryReport() {
  const [orderID, setOrderID] = useState("123456789");
  const [productID, setProductID] = useState("P123456");
  const [customerID, setCustomerID] = useState("C123456");
  const [customerName, setCustomerName] = useState("John Doe");
  const [customerContact, setCustomerContact] = useState("+1 123-456-7890");
  const [issueType, setIssueType] = useState("Product Damage");
  const [issueDescription, setIssueDescription] = useState(
    "The product arrived with visible damage to the exterior."
  );
  const [additionalComments, setAdditionalComments] = useState(
    "Please expedite the resolution."
  );
  const [solution, setSolution] = useState(
    "We have issued a replacement. It will be delivered within 5-7 business days."
  );

  return (
    <Layout>
    <div className="lg:col-span-6 lg:col-start-4 rounded mx-8 bg-main shadow-2xl rounded-r-lg px-8 pt-6 pb-8 mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-6">Inquiry Response</h1>

     
      {/* Order Information */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Order Information</h2>
        <p>
          <strong>Order ID:</strong> {orderID}
        </p>
        <p>
          <strong>Product ID:</strong> {productID}
        </p>
        <p>
          <strong>Customer ID:</strong> {customerID}
        </p>
        <p>
          <strong>Customer Name:</strong> {customerName}
        </p>
        <p>
          <strong>Customer Contact:</strong> {customerContact}
        </p>
      </div>


      {/* Product Image */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Product Image</h2>
        <img
          src="/path/to/product-image.jpg"
          alt="Product"
          className="w-full h-auto rounded-lg"
        />
      </div>


      {/* Customer Uploaded Damage Images */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Damage Images</h2>
        <img
          src="/path/to/damage-image.jpg"
          alt="Damage"
          className="w-full h-auto rounded-lg mb-4"
        />
      </div>


      {/* Issue Information */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Issue Information</h2>
        <p>
          <strong>Issue Type:</strong> {issueType}
        </p>
        <p>
          <strong>Issue Description:</strong> {issueDescription}
        </p>
      </div>


      {/* Additional Comments */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Additional Comments</h2>
        <p>{additionalComments}</p>
      </div>


      {/* Response Textbox */}
     <div className="mb-6">
    <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Response</h2>
    <textarea
    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows={4}
    placeholder="Write your response here..."
     ></textarea>
    </div>


      {/* Submit Button */}
      <div className="text-center mt-8">
        <Button >
          Submit Report
        </Button>
      </div>
    </div>
    </Layout>
  );
}
