"use client";
import React from 'react';

interface CardReviewsProps {
  title: string;
  total?: string;
  children: React.ReactNode;
}

const CardReviews: React.FC<CardReviewsProps> = ({ title, total, children }) => {
  return (
    <div className="p-4 bg-main-lighter text-black rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {total && <div className="text-4xl pt-4 font-bold">{total}</div>}
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default CardReviews;
