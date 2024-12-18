"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { fetchCustomerDetails } from "../action";
import Image from "next/image";

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

  const customerId = 3;

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <div className="flex-grow p-8">
        <div className="max-w-7xl mx-auto bg-white shadow rounded-lg p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
            <button className="bg-main-dark text-white px-6 py-2 rounded-lg hover:bg-brown-500">
              Save Changes
            </button>
          </div>

          {/* Profile Image and Personal Information */}
          <div className="flex gap-8 items-start mb-8">
            {/* Profile Image */}
            <div className="w-1/4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto">
                <Image
                  src={customer?.profile_picture_url || "/default-avatar.png"}
                  alt="Profile Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button className="mt-4 text-sm text-brown-600 flex items-center justify-center">
                <span className="material-icons">edit</span>
              </button>
            </div>

            {/* Personal Information Form */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Information
              </h2>
              <form className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={`${customer?.first_name} ${customer?.last_name}`}
                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={customer?.email}
                    className="w-full border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Mobile
                  </label>
                  <input
                    type="text"
                    placeholder="07012356341"
                    className="w-full placeholder-black border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Gender
                  </label>
                  <select className="w-full border-gray-300 rounded-lg px-4 py-2">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Address Information
            </h2>
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Shipping Address
                </label>
                <input
                  type="text"
                  defaultValue={address?.address_line_1}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Billing Address
                </label>
                <input
                  type="text"
                  defaultValue={address?.address_line_2}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </form>
          </div>

          {/* Payment Methods */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Payment Methods
            </h2>
            <div className="p-4 border rounded-lg">
              <p className="text-gray-600">Saved Credit Card</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerProfile;
