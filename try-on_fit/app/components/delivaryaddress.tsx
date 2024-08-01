import React from 'react'
interface Prop{
    fline:string[];
    sline:string[];
    city:string[];
    phone:number[];
}
function Delivaryaddress({fline,sline,city,phone}:Prop) {
  return (
    <div className="flex justify-center  rounded-2xl  border-gray-300 w-[80%] strock-2 flex-col">
      <hr />
    <div className="flex flex-col px-10">
        <p className='text-xl font-bold py-5'>Delivary</p>
        <p className='text-lg font-light'>{fline}</p>
        <p className='text-lg font-light'>{sline}</p>
        <p className='text-lg font-light'>{city}</p>
        <p className='text-lg font-light'>+{phone}</p>
    </div>
    </div>
  )
}

export default Delivaryaddress