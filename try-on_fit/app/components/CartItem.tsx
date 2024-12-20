import React from "react";
import Image from "next/image";
import IncrementDecrementButton from "./IncrementDecrementButton";   
import DeleteButton from "./DeleteButton";
import AvailabilityStatus from "./AvailabilityStatus";


export default function CartItem({

  name, color, price, size, status, isSelected, onCheckboxChange
} : {name: String, 
     color: String, 
     price: String, 
     size: String, 
     status: 'available' | 'unavailable',
     isSelected: boolean,
     onCheckboxChange: () => void
    }
) 

{

  return (
    <div className="bg-white shadow-md rounded p-4 md:p-6 mb-10 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

        <div className="col-span-1 flex justify-center items-center mb-4 md:mb-0">
          <input 
            type="checkbox" 
            className="form-checkbox shadow-md h-6 w-6 accent-slate-950 rounded"
            checked={isSelected}
            onChange={onCheckboxChange}
          />

        </div>

        <div className="col-span-1 flex justify-start items-center mb-4 md:mb-0">
          <Image src="/images/black_skinny_dress.png" alt="Image not found" width={100} height={100} />
        </div>

        <div className="col-span-2 text-left mb-4 md:mb-0">
          <p className="text-lg">{name}</p>
          <p className="text-l">{color}</p>
          <p className="text-l"><b>{price} /per item</b></p>
          <p><b>{size}</b></p>
          <b><AvailabilityStatus status={status} /></b>
        </div>


        <div className="col-span-1 flex justify-center items-center mb-4 md:mb-0">
          <IncrementDecrementButton />
        </div>


        <div className="col-span-1 flex justify-center items-center mb-4 md:mb-0">
          <DeleteButton />
        </div>

      </div>

    </div>

  );

  
}
