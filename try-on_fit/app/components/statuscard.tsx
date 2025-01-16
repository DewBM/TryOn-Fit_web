import React from 'react'
import Image from 'next/image'
interface Props{
  
  
  images:string[];
  price:string[];
  quantity:string[];
  title:string[];
 


}

function Statuscard({images,price,quantity,title}:Props) {
  return (
    
    <div className=" h-[150px] w-[90%] pl-[5rem] border rounded-xl ml-24 border-gray-200 mb-20 "> 
      <div className="flex flex-row  py-2 px-6 ">
      
      <div className="">

         {images.map((images, index) => (
          <Image
            key={index}
            alt={`Card background ${index}`}
            className="object-contain rounded-2xl"
            src={images}
            width={100} // Set the width
          height={100} 
          />
        ))}
      </div>

      <div className="flex flex-col justify-center pl-6">
       <p className='text-medium font-bold text-balance'>{title}</p>
     </div> {/* Centering the text vertically */}
    

      <div className="flex flex-col justify-center pl-[35rem]">
       <p className='text-lg font-bold'>{price}</p>
       <p className='text-lg pt-3 font bold '>Qty:{quantity}</p>
       </div> 
     </div>
    </div>
  
    
  
  )
}

export default Statuscard
