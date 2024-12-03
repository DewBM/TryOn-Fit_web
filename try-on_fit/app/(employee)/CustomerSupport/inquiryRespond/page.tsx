// "use client";
// import React, { useState } from "react";
// import Layout from "./layout";
// import Button from "@/app/components/Button";

// export default function InquiryReport() {
//   const [orderID, setOrderID] = useState("123456789");
//   const [productID, setProductID] = useState("P123456");
//   const [customerID, setCustomerID] = useState("C123456");
//   const [customerName, setCustomerName] = useState("John Doe");
//   const [customerContact, setCustomerContact] = useState("+1 123-456-7890");
//   const [issueType, setIssueType] = useState("Product Damage");
//   const [issueDescription, setIssueDescription] = useState(
//     "The product arrived with visible damage to the exterior."
//   );
//   const [additionalComments, setAdditionalComments] = useState(
//     "Please expedite the resolution."
//   );
//   const [solution, setSolution] = useState(
//     "We have issued a replacement. It will be delivered within 5-7 business days."
//   );

//   return (
//     <Layout>
//     <div className="lg:col-span-6 lg:col-start-4 rounded mx-8 bg-main shadow-2xl rounded-r-lg px-8 pt-6 pb-8 mt-10 mb-10">
//       <h1 className="text-2xl font-bold mb-6">Inquiry Response</h1>

     
//       {/* Order Information */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Order Information</h2>
//         <p>
//           <strong>Order ID:</strong> {orderID}
//         </p>
//         <p>
//           <strong>Product ID:</strong> {productID}
//         </p>
//         <p>
//           <strong>Customer ID:</strong> {customerID}
//         </p>
//         <p>
//           <strong>Customer Name:</strong> {customerName}
//         </p>
//         <p>
//           <strong>Customer Contact:</strong> {customerContact}
//         </p>
//       </div>

//       {/* Product Image */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Product Image</h2>
//         <img
//           src="/path/to/product-image.jpg"
//           alt="Product"
//           className="w-full h-auto rounded-lg"
//         />
//       </div>


//       {/* Customer Uploaded Damage Images */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Damage Images</h2>
//         <img
//           src="/path/to/damage-image.jpg"
//           alt="Damage"
//           className="w-full h-auto rounded-lg mb-4"
//         />
//       </div>


//       {/* Issue Information */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Issue Information</h2>
//         <p>
//           <strong>Issue Type:</strong> {issueType}
//         </p>
//         <p>
//           <strong>Issue Description:</strong> {issueDescription}
//         </p>
//       </div>


//       {/* Additional Comments */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Additional Comments</h2>
//         <p>{additionalComments}</p>
//       </div>


//       {/* Response Textbox */}
//      <div className="mb-6">
//     <h2 className="text-xl font-bold mb-4 border-b border-#cbd5e1">Response</h2>
//     <textarea
//     className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     rows={4}
//     placeholder="Write your response here..."
//      ></textarea>
//     </div>


//       {/* Submit Button */}
//       <div className="text-center mt-8">
//         <Button >
//           Submit Report
//         </Button>
//       </div>
//     </div>
//     </Layout>
//   );
// }


"use client";
import InquiryDetailSection from "@/app/components/InquiryDetailSection";
import ProductdataSection from "@/app/components/ProductdataSection";
import ContactdataSection from "@/app/components/ContactdataSection";
import { useEffect, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {inquiryType} from "../inquiry/page";
import { Chip, ChipProps } from "@nextui-org/react";

const ViewInq = ({
  isOpen,
  onClose,
  inquiryData,
}: {
  isOpen: boolean;
  onClose: () => void;
  inquiryData?: inquiryType;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("h-screen", "overflow-hidden");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("h-screen", "overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("h-screen", "overflow-hidden");
    };
  }, [isOpen, onClose]);

  const inquiryInfo = {
    // photo: "/images/emp-1.jpg",
    // name: "Kevin Andersan",
    // role: "Customer ",
    InquiryDetails: [
      { label: "Inquiry ID", value: inquiryData?.inquiry_id?.toString() || "N/A" },
      {label: "Issue Type", value: inquiryData?.issue_type?.toString() || "N/A"},
      {label: "Issue Description", value: inquiryData?.issue_description?.toString() || "N/A"},
      {label: "Additional Comments", value: inquiryData?.additional_comments?.toString() || "N/A"},
     
    ],
    productData: [
      { label: "Order ID", value: inquiryData?.order_id?.toString() || "N/A" },
      { label: "Product ID", value: inquiryData?.product_id?.toString() || "N/A" },
      { label: "Register Date", value: inquiryData?.date?.toString() || "N/A" },
    ],
    contactData: [
      { label: "Customer ID", value: inquiryData?.customer_id?.toString() || "N/A" },
      { label: "Customer Name", value: inquiryData?.name || "N/A" },
      { label: "Customer Contact", value: inquiryData?.contact_num || "N/A" },  
    ],

 
  };

  const statusColorMap: Record<string, ChipProps["color"]> = {
    available: "success",
    unavailable: "danger",
  };

  const statusColor = statusColorMap[inquiryData?.status || ""] || "default";

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <DialogPanel ref={dialogRef} className="bg-white rounded-lg overflow-hidden w-full max-w-2xl max-h-[80vh] p-4 md:p-6 relative">
        <div className="container mx-auto p-4">
          <h1 className="text-lg font-semibold mb-5" style={{ display: 'flex', alignItems: 'center' }}>
            Inquiry details
            <span style={{ marginLeft: '10px', fontSize: '70%' }}>{inquiryData?.status}</span>
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColor}
              size="md"
              variant="dot"
            />
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-3 flex flex-col space-y-4 w-full"> 
            <div className="bg-white p-4 rounded shadow border">
                <InquiryDetailSection
                  title="Inquiry data"
                  details={inquiryInfo.InquiryDetails}
                />
              </div>
              <div className="bg-white p-4 rounded shadow border">
                <ProductdataSection
                  title="Contact"
                  details={inquiryInfo.productData}
                />
              </div>
              <div className="bg-white p-4 rounded shadow border">
                <ContactdataSection
                  title="Contact"
                  details={inquiryInfo.contactData}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ViewInq;
