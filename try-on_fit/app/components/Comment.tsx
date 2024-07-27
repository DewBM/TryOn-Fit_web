"use client";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  margin-right: 1rem;
`;

const CommentText = styled.div`
  flex-grow: 1;
`;

const CommentHeader = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
`;

const CommentTime = styled.div`
  font-size: 0.6rem;
  color: #9a9a9a;
`;

const CommentBody = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const LikeButton = styled.div`
  font-size: 1rem;
`;

interface CommentProps {
  avatarSrc: string;
  name: string;
  time: string;
  body: string;
}

const Comment = ({ avatarSrc, name, time, body }: CommentProps) => (
  <CommentContainer>
    <Avatar src={avatarSrc} alt="avatar" />
    <CommentText>
      <CommentHeader>{name}</CommentHeader>
      <CommentTime>{time}</CommentTime>
      <CommentBody>{body}</CommentBody>
    </CommentText>
    <LikeButton>👍</LikeButton>
  </CommentContainer>
);

export default Comment;
