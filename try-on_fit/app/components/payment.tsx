import React from 'react';
import Image from 'next/image';
import visa from '@/public/images/visa.png';
import master from '@/public/images/master.png';

interface Prop {
  type: string[];
  acnumber: number[];
}

const formatAccountNumber = (number: number): string => {
  const numStr = number.toString();
  const length = numStr.length;
  
  if (length <= 5) {
    return numStr;
  }

  const lastFiveDigits = numStr.slice(-5);
  const maskedPart = '*'.repeat(length - 5);

  return `${maskedPart}${lastFiveDigits}`;
};

function Payment({ type, acnumber }: Prop) {
 
  const getImage = (paymentType: string) => {
    switch (paymentType.toLowerCase()) {
      case 'visa':
        return visa;
      case 'master':
        return master;
      default:
        return null;
    }
  };

  return (
   <div className='flex flex-col pt-1 pl-10 rounded-2xl strock-2 w-[80%] '>
    <p className='text-xl font-bold pb-5'>Payment</p>
    <div className="flex flex-row  ">
        
      <p className='text-lg font-light mb-4 pr-5'>
        
        {type.join(', ')}:<span className='pl-2 text-lg font-semibold'>{acnumber.map(formatAccountNumber).join(', ')}</span> 
      </p>
      <div className="flex flex-row ">
        {type.map((paymentType, index) => {
          const imageSrc = getImage(paymentType);
          return imageSrc ? (
            <div key={index} className="mb-2">
              <Image
                src={imageSrc}
                alt={`${paymentType} logo`}
                width={64}  
                height={64} 
                className="object-contain"
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
   </div>
  );
}

export default Payment;
