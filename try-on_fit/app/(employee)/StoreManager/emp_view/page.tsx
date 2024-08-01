"use client";
import { useState } from "react";
import EmployeeCard from "@/app/components/EmployeeCard";
import EmployeeContactDetailsSection from "@/app/components/EmployeeDetailSection";
import EmployeepersonalDetailsSection from "@/app/components/EmployeepersonalDetailsSection";

const EmployeePage = () => {
  const [activeTab] = useState(0);

  const employeeInfo = {
    photo: "/images/emp-1.jpg",
    name: "Kevin Andersan",
    role: "Stock Keeper",
    cardDetails: [
      { label: "Employee ID", value: "S01" },
      { label: "Admission date", value: "10/05/2019" },
      { label: "Stock Keeper", value: "Kevin Andersan" },
    ],
    personalData: [
      { label: "Full name", value: "Carol Santana" },
      { label: "Birthdate", value: "22/04/1994" },
      { label: "Gender", value: "Male" },
      { label: "City", value: "Colombo" },
    ],
    contactData: [
      { label: "E-mail", value: "kevin123@gmail.com" },
      { label: "Telephone No", value: "070 12345678" },
      { label: "Address", value: "Nugegoda, Colombo" },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-semibold mb-5">Employee details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <EmployeeCard
          photo={employeeInfo.photo}
          name={employeeInfo.name}
          title={employeeInfo.role}
          details={employeeInfo.cardDetails}
        />
        <div className="col-span-2 flex flex-col space-y-4">
          <div className="bg-white p-4 rounded shadow border">
            <EmployeepersonalDetailsSection
              title="Personal data"
              details={employeeInfo.personalData}
            />
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <EmployeeContactDetailsSection
              title="Contact"
              details={employeeInfo.contactData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
