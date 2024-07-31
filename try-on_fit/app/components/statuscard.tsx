import React from 'react'
import Image from 'next/image'
interface Props{
  images:string[];
  price:string[];
  quality:string[];
  title:string[];
  color:string[];

}
function Statuscard({images,price,quality,title,color}:Props) {
  return (
    
    <div className=" h-[150px] w-[90%] rounded-2xl border border-gray-300"> 
      <div className="flex flex-row  py-2 px-6 ">
      
      <div className="">

         {images.map((imgSrc, index) => (
          <Image
            key={index}
            alt={`Card background ${index}`}
            className="object-contain rounded-2xl"
            src={imgSrc}
            width={100} // Set the width
          height={100} 
          />
        ))}
      </div>

      <div className="flex flex-col justify-center pl-6">
       <p className='text-medium font-bold text-balance'>{title}</p>
       <p className='text-sm pt-3 '>{color}</p></div> {/* Centering the text vertically */}
    

      <div className="flex flex-col justify-center pl-[35rem]">
       <p className='text-lg font-bold'>{price}</p>
       <p className='text-sm pt-3 '>Qty:{quality}</p>
       </div> 
     </div>
    </div>
  
    
  
  )
}

export default Statuscard
