"use client";

import { useState } from "react";
import Address from "@/app/components/Address";
import ConfirmItem from "@/app/components/ConfirmItem";
import Pay from "@/app/components/Pay";
import AddAddressModal from "@/app/components/AddAddressModal";
import EditAddressModal from "@/app/components/EditAddressModal";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";


export default function CartAddress() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({

    name: "Sapna Nethmini",
    contactNumber: "+94 761516307",
    number: "No.174/1",
    village: "Middeniya",
    town: "Hambantota",
    country: "Sri Lanka",

  });

  return (

    <>
    <NavBar/>

    <div className="bg-slate-50 p-4 sm:p-6 md:p-8">
      <div id="page" className="flex flex-col md:flex-row w-full pt-20 md:pt-20">

        <div className="w-full md:w-3/5 md:ml-20 md:mr-20">

          <div className="bg-white shadow-md rounded px-4 py-6 mb-20 mx-4 sm:mx-6 md:mx-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <p className="text-lg mb-5 md:mb-0">
                <b>Shipping Address</b>
              </p>

              <button
                className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter"
                onClick={() => setIsAddModalOpen(true)}
              >
                Add new
              </button>


              <button
                className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-main-lighter"
                onClick={() => setIsEditModalOpen(true)}
              >
                Change Details
              </button>


            </div>

            <Address
              name="Sapna Nethmini"
              number="No.174/1"
              village="Middeniya"
              town="Hambantota"
              country="Sri Lanka"
              tele="+94 761516307"
            />

          </div>

          <ConfirmItem
            amount={5}
            name="Skinny Dress"
            color="Color"
            price="Rs.3000.00"
            size="XL"
          />
          
          <ConfirmItem
            amount={2}
            name="Summer Skinny Dress"
            color="Color"
            price="Rs.3000.00"
            size="XL"
          />

          <ConfirmItem
            amount={9}
            name="Skirt"
            color="Color"
            price="Rs.1000.00"
            size="XL"
          />

        </div>

        <div id="sub" className="bg-white shadow-md rounded w-full md:w-1/5 mt-8 md:mt-0 md:ml-20 py-6 max-h-80 flex flex-col items-center">
          <h3 className="text-center font-bold mb-4">Order Summary</h3>
          <Pay subamount={8500} 
               discount={600} 
               delivery={320} />
        </div>

      </div>


      <AddAddressModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

      <EditAddressModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentAddress={currentAddress}
      />

    </div>

    <Footer/>
    </>

  );
}
