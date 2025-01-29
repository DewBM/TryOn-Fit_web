"use client";

import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const EditProfile = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    district: "Manhattan",
    postalCode: "10001",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Profile Data:", profileData);
    alert("Profile data saved successfully!");
  };

  return (

    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <NavBar />

    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full grid grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
        {/* Row 1, Column 1: Image and Name */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mb-4">
            <img
              src={imagePreview || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                      file:rounded-full file:border-0 file:font-semibold 
                      file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>

        {/* Row 1, Column 2: Rules and Conditions */}
        <div className="text-red-600 text-sm">
        <button
              onClick={handleSave}
              className="mt-4 ml-64 w-75% bg-main-dark text-white py-3 px-6 rounded-lg hover:bg-main-dark-600"
            >
              Save Data
            </button>
            <h3 className="text-lg font-semibold mb-4 mt-6">Rules and Conditions</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure your profile information is accurate and up-to-date.</li>
            <li>Profile pictures should be clear and professional.</li>
            <li>Respect the privacy of others when interacting on the platform.</li>
            <li>Follow all community rules and adhere to the terms of service.</li>
            <li>Report any suspicious activity or inappropriate content immediately.</li>
          </ul>
        </div>

        {/* Row 2, Column 1: Address Information */}
        <div>
          <div className="space-y-4">
            {[
              "address1",
              "address2",
              "city",
            ].map((field) => (
              <div key={field}>
                <p className="text-sm font-medium text-gray-500 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </p>
                <input
                  type="text"
                  name={field}
                  value={profileData[field as keyof typeof profileData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 capitalize">District</p>
                <input
                  type="text"
                  name="district"
                  value={profileData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 capitalize">Postal Code</p>
                <input
                  type="text"
                  name="postalCode"
                  value={profileData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2, Column 2: Personal Information and Save Button */}
        <div>
          <div className="space-y-4">
            {[
              "firstName",
              "lastName",
              "email",
            ].map((field) => (
              <div key={field}>
                <p className="text-sm font-medium text-gray-500 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </p>
                <input
                  type="text"
                  name={field}
                  value={profileData[field as keyof typeof profileData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
            <div className="flex items-center space-x-2 mt-18">
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
               
              </a>
              <span className="text-sm text-gray-700"></span>
            </div>
            {/* <div className="flex items-center space-x-2 mt-8">
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Click Here
              </a>
              <span className="text-sm text-gray-700">Add Your Payment Method</span>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer />
  </div>
   
  );
};

export default EditProfile;
