import { NavLink } from "react-router-dom";
import * as S from "./NavBar.style";

function NavBar() {

  return (
    <S.NavBox>
      <S.List>
        <S.ListItem>
          <NavLink to={"/todo"}>Todo</NavLink>
        </S.ListItem>
      </S.List>
    </S.NavBox>
  )
}

export default NavBar