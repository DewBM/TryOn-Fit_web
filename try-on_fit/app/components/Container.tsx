"use client";
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 18rem;
  border: 1px solid #d1d5db; 
`;

const Header = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  margin-bottom: 1.5rem;
`;

interface ContainerProps {
  children: React.ReactNode;
}

const FeedbackContainer = ({ children }: ContainerProps) => (
  <Container>
    <Header>Customer Feedback</Header>
    {children}
  </Container>
);

export default FeedbackContainer;
