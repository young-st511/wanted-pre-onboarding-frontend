import styled, { css } from "styled-components";
import StyledButton from "./Button.style";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 10vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin: 2.4rem 0;

  width: 80%;
  min-width: 310px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;

  font-size: 2.4rem;
  line-height: 1.2;
  color: ${({ theme: { color } }) => color.black};
`;

const Input = styled.input`
  ${({ theme }) => theme.shadow.light};

  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem;

  font-size: 1.6rem;
  font-weight: 500;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.bgColor};

  ::placeholder {
    color: ${({ theme }) => theme.color.gray2};
  }
`;

const LabelTitle = styled.p`
  margin-left: 0.2rem;
  margin-bottom: 0.6rem;

  font-size: 1.6rem;
  font-weight: 600;
`;

const Label = styled.label<{ isError: boolean }>`
  width: 100%;

  ${({ theme, isError }) =>
    isError
      ? css`
          ${Input} {
            background-color: ${theme.color.redPoint}10;
          }

          ${LabelTitle} {
            color: ${theme.color.redPoint};
          }
        `
      : ""};
`;

const SubmitButton = styled(StyledButton)`
  margin-top: 1.6rem;
  padding: 0.8rem 1.6rem;

  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 1rem;

  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.white};

  &:hover {
    ${({ theme }) => theme.shadow.light};
    scale: 1.01;

    transition: all 0.2s ease-in-out;
  }
`;

const Error = styled.p`
  margin-top: 0.2rem;
  margin-left: 0.2rem;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.redPoint};

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export { Box, Title, Form, Input, Label, LabelTitle, SubmitButton, Error };
