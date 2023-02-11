import { redirect } from "react-router-dom";
import SignInForm from "../features/auth/components/SignInForm";
import { getAuth } from "../utils/token/getAuth";

function SignIn() {
  return <SignInForm />;
}

export function signInLoader() {
  const auth = getAuth();
  if (auth) {
    return redirect("/todo");
  }
  return null;
}

export default SignIn;
