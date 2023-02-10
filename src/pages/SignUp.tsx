import { redirect } from "react-router-dom";
import { getAccessToken } from "../utils/token/accessTokenUtils";
import SignUpForm from "../features/sign_up/components/SignUpForm";

function SignUp() {
  return <SignUpForm />;
}

export function SignUpLoader() {
  if (getAccessToken()) {
    redirect("/todo");
  }
}

export default SignUp;
