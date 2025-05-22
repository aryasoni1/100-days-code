import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.color || "#007bff"};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor || darkenColor(props.color || "#007bff")};
  }
`;
// Helper function to darken the hover color
const darkenColor = (hex) => {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = 0x20;
  const r = Math.max((num >> 16) - amt, 0);
  const g = Math.max(((num >> 8) & 0x00ff) - amt, 0);
  const b = Math.max((num & 0x0000ff) - amt, 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

const CustomButton = ({ children, color, hoverColor, onClick }) => {
  return (
    <StyledButton color={color} hoverColor={hoverColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default CustomButton;
