'use client'

import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function EditButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/CartItem.tsx');
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
      <Image src="/images/edit.png" alt="Edit" width={30} height={30} />
    </button>
  );
}
