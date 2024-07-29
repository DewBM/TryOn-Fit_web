"use client";
import styled from 'styled-components';

const BarContainer = styled.div`
  margin-bottom: 1rem;
 
`;

const Bar = styled.div<{ width: number }>`
  background-color: var(--main-dark);
  height: 8px;
  width: ${(props) => props.width}%;
  border-radius: 0.5rem;
  
`;

const BarBackground = styled.div`
  background-color: white;
  height: 8px;
  border-radius: 0.5rem;
   border: 1px solid #d1d5db; 
`;

const BarText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
`;

interface RatingBarProps {
  width: number;
  label: string;
  value: number;
}

const RatingBar = ({ width, label, value }: RatingBarProps) => (
  <BarContainer>
    <BarBackground>
      <Bar width={width}></Bar>
    </BarBackground>
    <BarText>
      <span>{label}</span>
      <span>{value}</span>
    </BarText>
  </BarContainer>
);

export default RatingBar;
