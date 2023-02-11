import styled from "styled-components";

const NavBox = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.size.navHeight};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.shadow.light};
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 100%;
  margin-left: 13rem;
`;

const ListItem = styled.li`
  box-sizing: border-box;

  a {
    display: block;

    padding: 0.4rem 1.2rem;
    border-radius: 0.8rem;

    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme: { color } }) => color.white};
    background-color: ${({ theme: { color } }) => color.gray2};

    transition: all 0.2s ease-in-out;

    &.active {
      font-weight: 700;
      background-color: ${({ theme: { color } }) => color.main};
    }
  }
`;

const SignOutButton = styled.button`
  justify-self: end;
  width: 12rem;

  margin-right: 1rem;
  padding: 0.4rem 0rem;
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.sub};

  cursor: pointer;
`;

export { List, ListItem, NavBox, SignOutButton };
