import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  averageRating: number;
  totalRatings: number;
  ratingsBreakdown: {
    stars: number;
    count: number;
  }[];
}

const RatingStar: React.FC<Props> = ({ title, averageRating, totalRatings, ratingsBreakdown }) => {
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 !== 0;

  return (
    <div className='py-[4rem] px-[5rem]'>
      <div className="flex flex-row rounded-2xl border border-gray-300 p-6 gap-20">
        <div className='flex  flex-col items-center justify-between gap-6 pl-10'>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-4xl font-bold'>{averageRating.toFixed(1)}<span className='text-2xl font-normal text-gray-500'>/5</span></p>
            <div className='flex ml-4'>
              {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 text-2xl" />
              ))}
              {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 text-2xl" />}
            </div>
          </div>
          <p className='text-gray-500'>{totalRatings} Ratings</p>
        </div>
        <div className=' w-[40%]'>
          {ratingsBreakdown.map((rating, index) => (
            <div key={index} className='flex items-center mt-2'>
              <div className='flex w-24'>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className={`text-xl ${i < rating.stars ? 'text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <div className='w-full bg-gray-200 h-2 rounded-full mx-4'>
                <div className='bg-yellow-500 h-full rounded-full' style={{ width: `${(rating.count / totalRatings) * 100}%` }}></div>
              </div>
              <p className='w-10 text-right'>{rating.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingStar;
