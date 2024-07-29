"use client";
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingsProps {
  rating: number;
  totalRatings: number;
  ratingDistribution: {
    [key: number]: number;
  };
}

const Ratings: React.FC<RatingsProps> = ({ rating, totalRatings, ratingDistribution }) => {
  return (
    <div className="rounded-lg border border-stroke bg-main-lighter px-8 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h3 className="text-center text-lg font-medium">Customer Feedback</h3>
      <div className="flex flex-col items-center my-5">
        <div className="text-5xl font-bold">{rating.toFixed(1)}</div>
        <div className="flex items-center my-1">
          {[...Array(4)].map((_, index) => (
            <span key={index} className={`text-2xl ${index < Math.floor(rating) ? 'text-main-dark' : 'text-black-300'}`}>
              <FaStar/>
            </span>
          ))}
          {rating % 1 !== 0 && <span className="text-2xl text-main-dark"><FaStarHalfAlt/></span>}
        </div>
        <div className="text-sm text-black-400">{totalRatings} Ratings</div>
      </div>
      <div className="mt-5">
        {Object.keys(ratingDistribution).map(key => (
          <div key={key} className="flex items-center mb-1">
            <div className="w-12 text-sm">{key} star</div>
            <div className="flex-grow bg-white border border-stroke rounded-full h-2 mx-2 ">
              <div className="bg-main-dark h-full rounded-full" style={{ width: `${(ratingDistribution[Number(key)] / totalRatings) * 100}%` }} />
            </div>
            <div className="w-12 text-sm text-right">{ratingDistribution[Number(key)]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
