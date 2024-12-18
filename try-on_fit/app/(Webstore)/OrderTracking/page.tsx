"use client";

import React, { useState } from "react";
import {
    Input,
    Button,
    Chip,
    Dropdown,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/react";
  import { SearchIcon } from "@/app/components/SearchIcon";
  import { capitalize } from "@/app/components/utils";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  CalendarDateRangeIcon,
  MapPinIcon,
  TruckIcon,
  ChevronDoubleRightIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Estimate Date', description: '2024-Dec (19-20)', href: '#', icon: CalendarDateRangeIcon },
  { name: 'Address', description: 'No.20/perakum matawatha/Colombo', href: '#', icon: MapPinIcon },
  { name: 'Delivery Service', description: "Pethum Service( +9411 2233445)", href: '#', icon: TruckIcon },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]


// Define steps with their statuses
const statusSteps = [
  { name: "Order Placement", status: "complete", description: "Your order has been placed successfully." },
  { name: "Order Processing", status: "current", description: "Your order is being reviewed and prepared." },
  { name: "Order Completed", status: "upcoming", description: " Your order is packed and ready to ship." },
  { name: "Order Shipping", status: "upcoming", description: "Your order is on its way to you." },
  { name: "Order Delivered", status: "upcoming", description: "Your order has been delivered." },
];

const OrderTracking = () => {
  const [steps] = useState(statusSteps);

  // Get dynamic styling for step icons
  const getStatusClass = (stepStatus) => {
    switch (stepStatus) {
      case "complete":
        return "bg-indigo-600 text-white border-indigo-600";
      case "current":
        return "border-2 border-indigo-600 text-indigo-600 bg-white";
      default:
        return "border-2 border-gray-300 bg-white text-gray-400";
    }
  };

  // Render the stepper
  return (

    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ">
          Track Your Order
        </h2>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-left text-sm  flex items-center ">
      Contact Us
      <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 ml-1" aria-hidden="true" />
    </a>
          </div>
    <div className="flex w-full p-4 bg-white">

    <div className="w-1/2 max-w-md mx-auto p-4 bg-white ">
      <div className="relative flex flex-col-reverse">
        {/* Vertical Line */}
        <div className="absolute bottom-0 left-4 w-0.5 h-full bg-gray-200"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start mb-6">
            {/* Step Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${getStatusClass(step.status)}`}
            >
              {step.status === "complete" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <span className="block w-2.5 h-2.5 bg-indigo-600 rounded-full"></span>
              )}
            </div>

            {/* Step Content */}
            <div className="ml-6">
              <h3
                className={`text-sm font-semibold ${step.status === "current" ? "text-indigo-600" : "text-gray-800"}`}
              >
                {step.name}
              </h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <div className="w-1/2 max-w-md mx-auto p-2 bg-white ">
            {solutions.map((item) => (
              <div key={item.name} className="group mt-6 relative flex gap-x-6 rounded-lg px-4  pt-4 hover:bg-gray-50">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className=" text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          <div className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <a href="#" className="text-left text-md font-semibold text-violet-700 flex items-center ml-14 ">
      Order Summary
      <ChevronDoubleRightIcon className="h-5 w-5 ml-1" aria-hidden="true" />
    </a>
        {/* <h2 className="text-left text-lg/8 font-semibold text-gray-900">
          Order Summary
        </h2> */}
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* <img
            alt="Transistor"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          /> */}
    
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          
          </div>
      
    
    </div>
    </div>
    </div>
    </div>
  );
  
};



export default OrderTracking;
