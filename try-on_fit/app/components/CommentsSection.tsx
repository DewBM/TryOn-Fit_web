"use client";
import styled from "styled-components";
import Comment from "@/app/components/Comment";

const CommentsContainer = styled.div`
  margin-top: 1rem;
  max-height: 10rem; 
  overflow-y: auto; 
  padding-right: 1rem; 
`;

const CommentsSection = () => (
  <CommentsContainer>
    <Comment
      avatarSrc="/images/emp-1.jpg"
      name="John"
      time="5 months ago"
      body="Great service!"
    />
    <Comment
      avatarSrc="/images/emp-3.jpg"
      name="Diana"
      time="1 month ago"
      body="Great as always!"
    />
    <Comment
      avatarSrc="/images/emp-2.jpg"
      name="Kevin"
      time="7 months ago"
      body="Supportive"
    />
    <Comment
      avatarSrc="/images/emp-2.jpg"
      name="Kevin"
      time="7 months ago"
      body="Supportive"
    />
  </CommentsContainer>
);

export default CommentsSection;
