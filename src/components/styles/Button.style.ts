import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};

  cursor: pointer;

  :hover {
    scale: 1.01;
  }
`;

export default StyledButton;
