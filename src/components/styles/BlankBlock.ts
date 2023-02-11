import styled from "styled-components";

const BlankBlock = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default BlankBlock;
