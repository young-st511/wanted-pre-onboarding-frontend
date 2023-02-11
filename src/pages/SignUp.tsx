import { redirect } from "react-router-dom";
import SignUpForm from "../features/sign_up/components/SignUpForm";
import { getAuth } from "../utils/token/getAuth";

function SignUp() {
  return <SignUpForm />;
}

export function signUpLoader() {
  const auth = getAuth();
  if (auth) {
    redirect("/todo");
  }
}

export default SignUp;
