"use client";

import React, { useState } from "react";

const ViewProfile = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    district: "Manhattan",
    postalCode: "10001",
  });
  const handleSave = () => {
    console.log("Saved Profile Data:", profileData);
    alert("Profile data saved successfully!");
  };
  return (
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
          <p className="text-sm text-gray-500">Change Profile Picture (Optional)</p>
        </div>

        {/* Row 1, Column 2: Rules and Conditions */}
       
        <div className="text-red-600 text-sm">
        <button
              onClick={handleSave}
              className="mt-4 ml-64 w-75% bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Update Details
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
                <p className="w-full px-3 py-2 text-gray-700">{profileData[field as keyof typeof profileData]}</p>
              </div>
            ))}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 capitalize">District</p>
                <p className="w-full px-3 py-2 text-gray-700">{profileData.district}</p>
              </div>
             
            </div>
          </div>
        </div>

        {/* Row 2, Column 2: Personal Information */}
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
                <p className="w-full px-3 py-2 text-gray-700">{profileData[field as keyof typeof profileData]}</p>
              </div>
            ))}
             <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 capitalize">Postal Code</p>
                <p className="w-full px-3 py-2 text-gray-700">{profileData.postalCode}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
