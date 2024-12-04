"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { fetchCustomerDetails } from "./action";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Customer {
  customer_id: string;
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture_url: string;
}

interface Address {
  address_id: number;
  customer_id: number;
  supplier_id: null | number;
  emp_id: null | number;
  address_line_1: string;
  address_line_2: string;
  city: string;
  district: string;
  postal_code: string;
}

const CustomerProfile: React.FC = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const customerId = 2; // Replace with dynamically fetched customer ID

  useEffect(() => {
    const getCustomerDetails = async () => {
      try {
        const data = await fetchCustomerDetails(customerId);
        if (data.isSuccess) {
          setCustomer(data.data.customer);
          setAddress(data.data.address);
        } else {
          setError(data.msg || "Failed to fetch customer details");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      }
    };

    getCustomerDetails();
  }, [customerId]);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <NavBar />
      <div className="flex-grow p-6 relative">
        {/* Edit Button in Top-Right Corner */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => router.push("/user_profile/profile/edit_profile")} // Navigate to the edit profile page
            className="bg-main-dark text-white px-6 py-3 rounded-lg hover:bg-main-light shadow-md"
          >
            Edit Profile
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Customer Profile
          </h1>

          {customer && (
            <div className="items-center mb-6">
              {/* Profile Picture and Customer Details */}
              <div className="p-6 border w-full">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 p-2">
                  <Image
                    src={customer.profile_picture_url || "/default-avatar.png"}
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-2">
                  <h2 className="text-lg font-semibold text-gray-700 p-2">
                    {customer.first_name} {customer.last_name}
                  </h2>
                  <p className="text-gray-600 p-2">{customer.email}</p>
                </div>
              </div>
            </div>
          )}

          {address && (
            <div className="p-6 border">
              <h1 className="text-lg font-semibold text-gray-700 p-2">
                Address Details
              </h1>
              <p className="text-gray-600 mt-2 p-2">
                <span className="font-medium">Address Line 1:</span>{" "}
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {address.address_line_1}
                </span>
              </p>
              <p className="text-gray-600 mt-1 p-2">
                <span className="font-medium">Address Line 2:</span>{" "}
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {address.address_line_2}
                </span>
              </p>
              <p className="text-gray-600 mt-1 p-2">
                <span className="font-medium">City:</span>{" "}
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {address.city}
                </span>
              </p>
              <p className="text-gray-600 mt-1 p-2">
                <span className="font-medium">District:</span>{" "}
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {address.district}
                </span>
              </p>
              <p className="text-gray-600 mt-1 p-2 flex items-center">
                <span className="font-medium text-gray-800 mr-2">Postal Code:</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">
                  {address.postal_code}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerProfile;
