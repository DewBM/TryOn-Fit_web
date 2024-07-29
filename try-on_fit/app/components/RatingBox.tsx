"use client";
import styled from 'styled-components';

const RatingBoxContainer = styled.div`
  background-color: var(--main-lighter);
  padding: 0.4rem;
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Rating = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 0.5rem;
`;

const Star = styled.span`
  color: var(--main-dark);
  font-size: 1.8rem;
`;

const RatingText = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
`;

const RatingBox = () => (
  <RatingBoxContainer>
    <Rating>4.9</Rating>
    <StarContainer>
      <Star>★</Star>
      <Star>★</Star>
      <Star>★</Star>
      <Star>★</Star>
      <Star>★</Star>
    </StarContainer>
    <RatingText>1,580 Ratings</RatingText>
  </RatingBoxContainer>
);

export default RatingBox;
