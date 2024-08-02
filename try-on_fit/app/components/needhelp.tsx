"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Needhelp() {
    const route = useRouter();
    const handdleinquiry=()=>{
       route.push("faq")
    }
     const handleorder =()=>{
        route.push("orderItems")
     }
     const handlereturns =()=>{
        route.push("returns")
     }
  return (

    <div className="flex justify-center  rounded-2xl  border-gray-300 w-[80%] strock-2 flex-col">
      <hr />
    <div className="flex flex-col px-10">
   < p className='text-xl font-bold py-5'>Need Help</p>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <div className="flex flex-row py-2 ">
      
        <span className="material-symbols-outlined pr-5 ">help_outline</span>
        <p className='text-lg cursor-pointer  ' onClick={handdleinquiry}>FAQ</p>
        <span className="pl-5 material-symbols-outlined">north_east</span>
        </div>

        <div className="flex flex-row py-2 ">
        
        <span className="material-symbols-outlined pr-5">local_shipping</span>
        <p className='text-lg cursor-pointer  ' onClick={handleorder}>Orders</p>
        <span className="pl-5 material-symbols-outlined">north_east</span>
        </div>

        <div className="flex flex-row py-2 ">
        
        <span className="material-symbols-outlined pr-5">swap_horizontal_circle</span>
        <p className='text-lg cursor-pointer  ' onClick={handlereturns}>Returns</p>
        <span className="pl-5 material-symbols-outlined">north_east</span>
        </div>

        </div>
        <div className="pb-6"></div>
        <hr/>
        </div>
  )
}

export default Needhelp