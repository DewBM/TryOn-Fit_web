import { Dialog, DialogPanel } from "@headlessui/react";
import { Chip, ChipProps } from "@nextui-org/react";
import { InquiryType } from "@/types";  // Adjust the type to match your data
import { useRef } from "react";

const ViewInq = ({
  isOpen,
  onClose,
  inquiryData,
}: {
  isOpen: boolean;
  onClose: () => void;
  inquiryData: InquiryType;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const statusColorMap: Record<string, ChipProps["color"]> = {
    solved: "success",
    pending: "warning",
    unresolved: "danger",
  };

  const statusColor = statusColorMap[inquiryData.status] || "default";

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <DialogPanel ref={dialogRef} className="bg-white rounded-lg overflow-hidden w-full max-w-2xl max-h-[80vh] p-4 md:p-6 relative">
        <div className="container mx-auto p-4">
          <h1 className="text-lg font-semibold mb-5" style={{ display: 'flex', alignItems: 'center' }}>
            Inquiry details
            <span style={{ marginLeft: '10px', fontSize: '70%' }}>{inquiryData.status}</span>
            <Chip className="capitalize border-none gap-1 text-default-600" color={statusColor} size="md" variant="dot" />
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-3 flex flex-col space-y-4 w-full">
              <div className="bg-white p-4 rounded shadow border">
                <h3 className="text-xl font-semibold mb-3">Inquiry Data</h3>
                <p><strong>Inquiry ID:</strong> {inquiryData.inquiry_id}</p>
                <p><strong>Issue Type:</strong> {inquiryData.issue_type}</p>
                <p><strong>Issue Description:</strong> {inquiryData.issue_description}</p>
                <p><strong>Additional Comments:</strong> {inquiryData.additional_comments}</p>
              </div>

              <div className="bg-white p-4 rounded shadow border">
                <h3 className="text-xl font-semibold mb-3">Product Data</h3>
                <p><strong>Order ID:</strong> {inquiryData.order_id}</p>
                <p><strong>Product ID:</strong> {inquiryData.product_id}</p>
                <p><strong>Register Date:</strong> {new Date(inquiryData.date).toLocaleDateString()}</p>
              </div>

              <div className="bg-white p-4 rounded shadow border">
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p><strong>Customer ID:</strong> {inquiryData.customer_id}</p>
                <p><strong>Customer Name:</strong> {inquiryData.name}</p>
                <p><strong>Customer Contact:</strong> {inquiryData.contact_num}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ViewInq;
