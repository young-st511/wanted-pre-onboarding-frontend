import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.bgColor};

    * {
      font-family: SUIT;
      font-weight: 400;
      line-height: 2.4rem; 
      color: ${({ theme }) => theme.color.black};
      font-size: 1.6rem;
    }
  }

  button, input {
    background-color: ${({ theme }) => theme.color.white};
    margin: 0;
    padding: 0;
    border: 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  .arrow-button {
    font-feature-settings: "ss18";
  }

  .hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
`;

export default GlobalStyle;
