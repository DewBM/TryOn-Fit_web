import InquiryDetailSection from "@/app/components/InquiryDetailSection";
import ProductdataSection from "@/app/components/ProductdataSection";
import ContactdataSection from "@/app/components/ContactdataSection";
import SolDataSection from "@/app/components/SolDataSection";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { inquiryType } from "../inquiry/page";


const ViewSol = ({
  isOpen,
  onClose,
  inquiryData,
}: {
  isOpen: boolean;
  onClose: () => void;
  inquiryData?: inquiryType;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
//   const [solution, setSolution] = useState("");

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
    solData:  [
     { label: "Solution", value: inquiryData?.solution || "N/A" },
    ]
    
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
            {/* <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColor}
              size="md"
              variant="dot"
            /> */}
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
              <div className="bg-white p-4 rounded shadow border">
                <SolDataSection
                  title="Solution"
                  details={inquiryInfo.solData}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ViewSol;
