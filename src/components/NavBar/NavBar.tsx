import { NavLink } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { getAuth } from "../../utils/token/getAuth";
import * as S from "./NavBar.style";

function NavBar() {
  const auth = getAuth();
  const { signOut } = useAuth();

  return (
    <S.NavBox>
      <S.List>
        <S.ListItem>
          <NavLink to={"/todo"}>Todo</NavLink>
        </S.ListItem>
      </S.List>
      {auth ? (
        <S.SignOutButton onClick={signOut}>Sign Out</S.SignOutButton>
      ) : null}
    </S.NavBox>
  );
}

export default NavBar;
