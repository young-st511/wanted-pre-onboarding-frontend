import { redirect } from "react-router-dom";
import { StyledLink } from "../components/styles/Link.style";
import SignInForm from "../features/auth/components/SignInForm";
import { getAuth } from "../utils/token/getAuth";

function SignIn() {
  return (
    <>
      <SignInForm />
      <StyledLink to="/signup">회원가입 하기</StyledLink>
    </>
  );
}

export function signInLoader() {
  const auth = getAuth();
  if (auth) {
    return redirect("/todo");
  }
  return null;
}

export default SignIn;
