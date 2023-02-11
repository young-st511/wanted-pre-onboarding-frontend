import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: block;
  margin: 1rem auto;
  width: 14rem;

  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({theme:{color}})=>color.main};

  &:hover {
    scale: 1.01;
  }
`