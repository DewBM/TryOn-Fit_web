import { useState } from 'react';

interface Props {
  address_line_1: string;
  address_line_2: string;
  city: string;
  district: string;
  postal_code: string;
}

export default function Address({ address_line_1, address_line_2, city, district, postal_code }: Props) {
  return (
    <div className="flex flex-col">
      <p>{address_line_1}</p>
      <p>{address_line_2}</p>
      <p>{city}</p>
      <p>{district}</p>
      <p>{postal_code}</p>
    </div>
  );
}
