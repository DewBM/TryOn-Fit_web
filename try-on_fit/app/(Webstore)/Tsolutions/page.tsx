"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@nextui-org/react";
import Header from "@/app/components/Header";
import NeedhelpFAQ from "@/app/components/NeedHelpFaq";
import ViewSol from "@/app/(employee)/CustomerSupport/solvedtickets/page";
import { customFetch } from "@/app/utils/auth";

export type inquiryType = {
  key: React.Key;
  inquiry_id: string;
  order_id: string;
  product_id: string;
  customer_id: string;
  name: string;
  contact_num: string;
  status: string;
  date: string;
  issue_type: string;
  issue_description: string;
  additional_comments: string;
  solution: string;
};

export default function Tickets() {
  const [inquiries, setInquiries] = useState<inquiryType[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<inquiryType[]>([]);
  const [filters, setFilters] = useState({
    customer_id: "",
    order_id: "",
    product_id: "",
  });

  useEffect(() => {
    const getInquiry = async () => {
      let inquiries: inquiryType[] = await customFetch("/inquirylist", {
        method: "GET",
      });

      const inquiriesWithKeys = inquiries.map((item) => ({
        ...item,
        key: item.inquiry_id,
      }));

      setInquiries(inquiriesWithKeys);
      setFilteredInquiries(inquiriesWithKeys);
    };

    getInquiry();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    const filtered = inquiries.filter((inquiry) =>
      Object.entries({ ...filters, [name]: value }).every(([key, filterValue]) =>
        filterValue
          ? inquiry[key as keyof inquiryType]?.toString().includes(filterValue)
          : true
      )
    );
    setFilteredInquiries(filtered);
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectInq, setSelectInq] = useState<inquiryType>({
    key: "",
    inquiry_id: "",
    order_id: "",
    product_id: "",
    customer_id: "",
    name: "",
    contact_num: "",
    status: "",
    date: "",
    issue_type: "",
    issue_description: "",
    additional_comments: "",
    solution: "",
  });

  function handleRowClick(inquiry: inquiryType) {
    setPopupOpen(true);
    setSelectInq(inquiry);
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header sideBarOpen={sidebarOpen} setSideBarOpen={setSidebarOpen} />
      <div className="w-full flex flex-row pl-[5rem] justify-between pb-10">
        <div className="p-4 flex flex-col w-[80%] space-y-10">
          <div className="text-xl py-5">
            <b>
              You can search your ticket by Customer ID, Inquiry ID, or using
              Order ID
            </b>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
              <thead className="bg-main-lighter">
                <tr>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Inquiry ID
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Order ID
                    <Input
                      size="sm"
                      name="order_id"
                      value={filters.order_id}
                      onChange={handleFilterChange}
                      placeholder="Filter"
                      className="mt-2"
                    />
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Product ID
                    <Input
                      size="sm"
                      name="product_id"
                      value={filters.product_id}
                      onChange={handleFilterChange}
                      placeholder="Filter"
                      className="mt-2"
                    />
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Customer ID
                    <Input
                      size="sm"
                      name="customer_id"
                      value={filters.customer_id}
                      onChange={handleFilterChange}
                      placeholder="Filter"
                      className="mt-2"
                    />
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Issue Type
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Description
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Contact
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry) => (
                  <tr
                    key={inquiry.inquiry_id}
                    className="hover:bg-gray-50"
                    onClick={() => handleRowClick(inquiry)}
                  >
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.inquiry_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.order_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.product_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.customer_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.issue_type}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.issue_description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.contact_num}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {new Date(inquiry.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {inquiry.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col w-[30%] space-y-5">
          <NeedhelpFAQ />
        </div>
      </div>
      <ViewSol
        isOpen={popupOpen}
        onClose={() => {
          setPopupOpen(false);
        }}
        inquiryData={selectInq}
      />
    </>
  );
}
