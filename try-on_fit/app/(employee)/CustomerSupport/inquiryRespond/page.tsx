import InquiryDetailSection from "@/app/components/InquiryDetailSection";
import ProductdataSection from "@/app/components/ProductdataSection";
import ContactdataSection from "@/app/components/ContactdataSection";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { inquiryType } from "../inquiry/page";
import { Chip, ChipProps } from "@nextui-org/react";
import { inquiryrespond } from "./actions";
import Swal from "sweetalert2";


const handleSetSolve = async (solution: string, setSolution: React.Dispatch<React.SetStateAction<string>>, onClose: () => void, inquiryData?: inquiryType) => {
  // Check if solution is provided
  if (!solution.trim()) {
    Swal.fire({
      title: 'Warning!',
      text: 'Please enter a solution before submitting.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    return;
  }

  // Ensure inquiryData exists and has inquiry_id
  if (!inquiryData || !inquiryData.inquiry_id) {
    Swal.fire({
      title: 'Error!',
      text: 'Invalid inquiry data.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
    return;
  }

  const formData = new FormData();
  formData.append("solution", solution);

  try {
    // Call the API to submit the solution
    await inquiryrespond(null, formData, Number(inquiryData.inquiry_id));

    // Clear the solution field after success
    setSolution(""); 
    // Close the modal
    onClose(); 

    // Show success message
    Swal.fire({
      title: 'Success!',
      text: 'Solution has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

  } catch (error) {
    // Handle error
    console.error("Failed to set solution:", error);
    Swal.fire({
      title: 'Error!',
      text: 'Something went wrong while submitting the solution.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};




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
  const [solution, setSolution] = useState("");

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
    InquiryDetails: [
      { label: "Inquiry ID", value: inquiryData?.inquiry_id?.toString() || "N/A" },
      { label: "Issue Type", value: inquiryData?.issue_type?.toString() || "N/A" },
      { label: "Issue Description", value: inquiryData?.issue_description?.toString() || "N/A" },
      { label: "Additional Comments", value: inquiryData?.additional_comments?.toString() || "N/A" },
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

  const handleSolutionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSolution(event.target.value);
  };


  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <DialogPanel
        ref={dialogRef}
        className="bg-white rounded-lg overflow-hidden w-full max-w-2xl max-h-[80vh] flex flex-col p-4 md:p-6 relative"
      >
        <div className="container mx-auto p-4 flex-1 overflow-y-auto">
          <h1
            className="text-lg font-semibold mb-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            Inquiry details
            <span style={{ marginLeft: "10px", fontSize: "70%" }}>
              {inquiryData?.status}
            </span>
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
                  title="Product Data"
                  details={inquiryInfo.productData}
                />
              </div>
              <div className="bg-white p-4 rounded shadow border">
                <ContactdataSection
                  title="Contact Data"
                  details={inquiryInfo.contactData}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally show the Solution Textbox, Button, or Solution Text */}
        {inquiryData?.status !== "solved" ? (
          <div className="bg-gray-100 p-4 border-t border-gray-300">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Solution"
                value={solution}
                onChange={handleSolutionChange}
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                onClick={() => handleSetSolve(solution, setSolution, onClose, inquiryData)}
                className="bg-main-dark text-white px-4 py-2 rounded-md hover:bg-main-dark"
              >
                Set Solve
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 p-4 border-t border-gray-300">
            <h2 className="text-lg font-semibold">Solution:</h2>
            <p>{inquiryData?.solution || ""}</p>
          </div>
        )}
      </DialogPanel>
    </Dialog>
  );
};

export default ViewInq;
