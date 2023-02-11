import { redirect } from "react-router-dom";
import { StyledLink } from "../components/styles/Link.style";
import SignUpForm from "../features/sign_up/components/SignUpForm";
import { getAuth } from "../utils/token/getAuth";

function SignUp() {
  return (
    <>
      <SignUpForm />
      <StyledLink to="signin">로그인 하기</StyledLink>
    </>
  );
}

export function signUpLoader() {
  const auth = getAuth();
  if (auth) {
    redirect("/todo");
  }
  return null;
}

export default SignUp;
