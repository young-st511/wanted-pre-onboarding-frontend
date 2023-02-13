import styled from "styled-components";
import StyledButton from "../../../components/styles/Button.style";

export const ListBox = styled.main`
  min-width: 320px;
  width: 60vw;

  margin: 5rem auto;
`;

export const CardBox = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.2rem auto;
  padding: 2rem 2.4rem;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { size } }) => size.radius};
  ${({ theme }) => theme.shadow.light};
`;

export const HeaderBox = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;
`;

export const TitleBox = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
  }

  input {
    padding: 0.4rem 0rem;

    width: 100%;

    font-size: 2rem;
    font-weight: 700;

    border-bottom: 2px solid ${({ theme: { color } }) => color.gray3};
  }
`;

export const Contents = styled.p`
  margin-top: 1.4rem;
  margin-bottom: 0.6rem;

  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const EditButton = styled(StyledButton)`
  flex-shrink: 0;
  padding: 0.6rem 1.2rem;

  border-radius: 0.8rem;

  color: ${({ theme: { color } }) => color.main};
  background-color: ${({ theme: { color } }) => color.white};

  font-size: 1.6rem;
  font-weight: 600;

  :hover {
    background-color: ${({ theme: { color } }) => color.gray4};

    transition: background-color 0.2s ease-in-out;
  }

  &:disabled {
    color: ${({ theme: { color } }) => color.gray2};
    background-color: ${({ theme: { color } }) => color.gray4};
    &:hover {
      color: ${({ theme: { color } }) => color.gray2};
      background-color: ${({ theme: { color } }) => color.gray4};
      scale: unset;

      cursor: default;
    }
  }
`;

export const DeleteButton = styled(EditButton)`
  color: ${({ theme: { color } }) => color.sub};
`;
