import { redirect } from "react-router-dom";
import { getAccessToken } from "../utils/token/accessTokenUtils";
import SignInForm from "../features/auth/components/SignInForm";

function SignIn() {
  return <SignInForm />;
}

export function SignInLoader() {
  if (getAccessToken()) {
    redirect("/todo");
  }
}

export default SignIn;
