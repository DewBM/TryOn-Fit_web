import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import RatingStar from './RatingStar';

interface Review {
  id: number;
  rating: number;
  name: string;
  verified: boolean;
  date: string;
  reviewText: string;
  image: string;
  size: string;
  color: string;
  likes: number;
  dislikes: number;
  sellerResponse?: string;
}

interface Props {
  title: string;
  averageRating: number;
  totalRatings: number;
  ratingsBreakdown: {
    stars: number;
    count: number;
  }[];
  reviews: Review[];
}

const ReviewSection: React.FC<Props> = ({ title, averageRating, totalRatings, ratingsBreakdown, reviews }) => {
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState<string>('relevance');
  const [reviewData, setReviewData] = useState(reviews);

  const handleLike = (id: number) => {
    const updatedReviews = reviewData.map(review => 
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    );
    setReviewData(updatedReviews);
  };

  const handleDislike = (id: number) => {
    const updatedReviews = reviewData.map(review => 
      review.id === id ? { ...review, dislikes: review.dislikes + 1 } : review
    );
    setReviewData(updatedReviews);
  };

  const filteredReviews = filter
    ? reviewData.filter(review => review.rating === filter)
    : reviewData;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sort === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.likes - a.likes;
  });

  return (
    <div className='py-10 px-6'>
      <RatingStar 
        title={title} 
        averageRating={averageRating} 
        totalRatings={totalRatings} 
        ratingsBreakdown={ratingsBreakdown} 
      />

      <div className="flex justify-between items-center mt-6 px-[5rem]">
        <div>
          <p className='font-bold'>Product Reviews</p>
        </div>
        <div className="flex space-x-4">
          <select 
            className='border rounded px-3 py-1' 
            onChange={(e) => setSort(e.target.value)} 
            value={sort}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="date">Sort: Date</option>
          </select>

          <select 
            className='border rounded px-3 py-1' 
            onChange={(e) => setFilter(e.target.value ? parseInt(e.target.value) : null)} 
            value={filter || ''}
          >
            <option value="">Filter: All stars</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>
      </div>

      <div className="mt-4 px-[5rem]">
        {sortedReviews.map(review => (
          <div key={review.id} className="border-b py-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className='flex'>
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                  ))}
                </div>
                <p className="ml-2 font-semibold">{review.name}</p>
                {review.verified && <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 ml-2" />}
              </div>
              <p className="text-gray-500">{review.date}</p>
            </div>
            <p className="mt-2">{review.reviewText}</p>
            {review.image && (
              <div className="mt-2">
                <img src={review.image} alt="Review" className="w-24 h-24 object-cover" />
              </div>
            )}
            <p className="text-sm text-gray-500 mt-2">Size: {review.size}, Color Family: {review.color}</p>
            <div className="flex items-center mt-2">
              <button 
                onClick={() => handleLike(review.id)} 
                className="flex items-center focus:outline-none"
              >
                <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500" />
                <p className="ml-1 mr-4">{review.likes}</p>
              </button>
              <button 
                onClick={() => handleDislike(review.id)} 
                className="flex items-center focus:outline-none"
              >
                <FontAwesomeIcon icon={faThumbsDown} className="text-red-500" />
                <p className="ml-1">{review.dislikes}</p>
              </button>
            </div>
            {review.sellerResponse && (
              <div className="bg-gray-100 p-2 mt-4 rounded">
                <p className="text-red-600 font-semibold">Seller Response - {review.date}</p>
                <p>{review.sellerResponse}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
