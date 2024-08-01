import React from 'react'

interface Props{
    orderId:number[];
   
    deliveredDate:string[];
}

function OrderNumber2({orderId,deliveredDate}:Props) {
  return (
    <div className="  w-[90%] rounded-2xl  border-gray-300 pt-10"> 
      <div className="flex flex-row  px-10  ">
        <p className='text-2xl font-bold'>Order ID : {orderId}</p>
        <p className='text-medium pt-2 font-light pr-5 text-green-600 pl-3'>Delivered Date :{deliveredDate}</p>
           

      </div>
      </div>
  )
}

export default OrderNumber2