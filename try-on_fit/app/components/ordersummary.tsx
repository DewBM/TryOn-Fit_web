import React from 'react'
interface Props {
  total: number[];
  discount: number[];
  order: number[];
  delivary:number[];
}

function Ordersummary({total,discount,order,delivary}:Props) {
  return (
   <div className="flex justify-center  rounded-2xl border border-gray-300 w-[80%] strock-2 flex-col">
    <div className="flex flex-col px-12">
    <p className='text-lg font-semibold py-6 px-10'>Order Sumary</p>
 
   <div className="flex flex-row justify-between">
    <p className='test sm py-2'>Order</p>
    <p className='test sm py-2'>RS.{order}</p>
   </div>
   
   <div className="flex flex-row justify-between">
    <p className='test sm py-2'>Delivary</p>
    <p className='test sm py-2'>RS.{delivary}</p>
   </div>
   <div className="flex flex-row justify-between">
    <p className='test sm py-2'>Discount</p>
    <p className='test sm py-2 text-red-600'>-RS.{discount}</p>
   </div>
   <hr />
   <div className="flex flex-row justify-between pb-8">
    <p className='test sm py-2'>Total</p>
    <p className='test sm py-2'>RS.{total}</p>
   </div>
   
   </div>
   </div>
  )
}

export default Ordersummary