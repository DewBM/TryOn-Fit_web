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
    <div className="flex-grow text-center space-x-4 bg-gray-300 rounded-full px-2 py-2 ml-11 mr-11">
      <button
        onClick={decrement}
        className="text-xl font-bold px-4 focus:outline-none"
      >
        -
      </button>
      <span className="text-lg">{count}</span>
      <button
        onClick={increment}
        className="text-xl font-bold px-4 focus:outline-none"
      >
        +
      </button>
    </div>
  );
}


