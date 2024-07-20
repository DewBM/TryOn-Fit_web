import React from "react";
import Image from 'next/image';

export default function DeleteButton() {
  const handleClick = () => {};

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
      <Image src="/images/delete.png" alt="Delete" width={30} height={30} />
    </button>
  );
}
