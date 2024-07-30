"use client";

import { useState } from "react";
import Address from "@/app/components/Address";
import ConfirmItem from "@/app/components/ConfirmItem";
import Pay from "@/app/components/Pay";
import AddAddressModal from "@/app/components/AddAddressModal";


export default function CartAddress() {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="bg-white p-4 sm:p-6 md:p-8">
            
            <div id="page" className="flex flex-col md:flex-row w-full">

                <div className="w-full md:w-3/5 md:ml-20 md:mr-20">
                <div className="bg-seashell shadow-md rounded px-4 py-6 mb-20 mx-4 sm:px-6 sm:mx-6 md:mx-8 md:px-8 md:items-center2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

                    <p className = "text-lg mb-5 items-center"><b>Shipping Address</b></p>

                    <button className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-slate-50" onClick={() => setIsModalOpen(true)}>Add new</button>

                    <button className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-slate-50">Change Details</button>
                    
                {/* <div className="w-full md:w-3/5 md:ml-20 md:mr-20">
                <div className="bg-seashell shadow-md rounded px-4 py-6 mb-20 mx-4 sm:px-6 sm:mx-6 md:mx-8 md:px-8 md:items-center2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

                    <p className = "text-lg mb-5 items-center"><b>Shipping Address</b></p>

                    <button className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-slate-50" onClick={() => setIsModalOpen(true)}>Add new</button>

                    <button className="bg-white text-saddlebrown border-1 border-saddlebrown m-7 p-2 px-2 rounded-xl hover:bg-slate-50">Change Details</button>
 */}

                    </div>

                    <Address name="Sapna Nethmini" 
                             number="No.174/1" 
                             village="Middeniya" 
                             town="Hambantota" 
                             country="Sri Lanka" 
                             tele= "+94 761516307"/>  

                </div>

                    <ConfirmItem amount={5} 
                                 name="Skinny Dress" 
                                 color="Color" 
                                 price="Rs.3000.00" 
                                 size="XL" />

                    <ConfirmItem amount={2} 
                                 name="Summer Skinny Dress" 
                                 color="Color" 
                                 price="Rs.3000.00" 
                                 size="XL" />

                    <ConfirmItem amount={9} 
                                 name="Skirt" 
                                 color="Color" 
                                 price="Rs.1000.00" 
                                 size="XL" />          
                </div>

                <div id="sub" className="bg-seashell shadow-md rounded w-full md:w-1/5 mt-8 md:mt-0 md:ml-20 py-6 max-h-80 flex flex-col items-center">
                    <h3 className="text-center font-bold mb-4">Order Summary</h3>

                    <Pay subamount={8500} 
                         discount={600} 
                         delivery={320} />

                </div>

            </div>

            <AddAddressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>



    );






}
