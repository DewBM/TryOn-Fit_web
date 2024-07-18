'use client'

import React, { useState } from 'react';

export default function IncrementDecrementButton() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 bg-gray-300 rounded-full px-4 py-2 mx-2 sm:mx-4 md:mx-6">
      <button
        onClick={decrement}
        className="text-xl font-bold px-2 py-1 focus:outline-none sm:px-4"
      >
        -
      </button>
      <span className="text-lg px-2">{count}</span>
      <button
        onClick={increment}
        className="text-xl font-bold px-2 py-1 focus:outline-none sm:px-4"
      >
        +
      </button>
    </div>
  );
}




