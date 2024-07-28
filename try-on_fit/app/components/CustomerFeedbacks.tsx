"use client";
import FeedbackContainer from "@/app/components/Container";
import RatingBox from "@/app/components/RatingBox";
import RatingBar from "@/app/components/RatingBar";
import CommentsSection from "@/app/components/CommentsSection";

const CustomerFeedback = () => {
  return (
    <FeedbackContainer>
      <RatingBox />
      <RatingBar width={75} label="5" value={1180} />
      <RatingBar width={50} label="4" value={200} />
      <RatingBar width={25} label="3" value={100} />
      <RatingBar width={10} label="2" value={80} />
      <RatingBar width={5} label="1" value={20} />
      <CommentsSection />
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
