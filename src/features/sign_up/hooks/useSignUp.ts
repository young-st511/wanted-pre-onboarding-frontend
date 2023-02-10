import { useState } from "react";
import { SignUpRequest } from "../api/signUpApi.type";
import { postSignUp } from "../api/signUpApi";
import { AxiosError } from "axios";
import { showAxiosError } from "../../../utils/axios/showAxiosError";
import { emailRegex, passwordRegex } from "../data/validationRegexes";

export function useSignUpForm(submitCallback: VoidFunction) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const emailError = isValidEmail ? "" : "이메일을 확인해주세요(@ 포함)";
  const passwordError = isValidPassword
    ? ""
    : "패스워드를 확인해주세요(8자 이상)";

  const isValid = isValidEmail && isValidPassword;

  setIsValidEmail(validateEmail(email));
  setIsValidPassword(validatePassword(password));

  const handleSubmit = () => {
    if (!isValid) {
      console.error("Validation not confirmed");
      return;
    }

    const submitData = { email, password };
    signUp(submitData).then(submitCallback);
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    isValid,
    handleSubmit,
  };
}

function validateEmail(email: string) {
  return emailRegex.test(email);
}

function validatePassword(password: string) {
  return passwordRegex.test(password);
}

async function signUp(data: SignUpRequest) {
  try {
    const response = await postSignUp(data);
    if (response.status != 201) {
      throw new Error("Something Wrong!");
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
}
