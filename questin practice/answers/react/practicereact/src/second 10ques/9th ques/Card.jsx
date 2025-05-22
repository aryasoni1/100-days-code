import React from "react";
import styled from "styled-components";
// Styled component definitions
const CardWrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Card() {
  return (
    <CardWrapper>
      <Title>Card Title</Title>
      <Description>This is a basic card.</Description>
      <Button>Learn More</Button>
    </CardWrapper>
  );
}
export default Card;
