import { useNavigate } from "react-router-dom";
import { useSignUpForm } from "../hooks/useSignUp";
import * as S from "./SignUpForm.style";

function SignUpForm() {
  const navigate = useNavigate();
  const successSignUp = () => navigate("/signin");
  const {
    email,
    emailError,
    isValid,
    password,
    passwordError,
    setEmail,
    setPassword,
    handleSubmit,
  } = useSignUpForm(successSignUp);
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        value={email}
        data-testid="email-input"
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <S.Error>{emailError}</S.Error>
      <S.Input
        value={password}
        data-testid="password-input"
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <S.Error>{passwordError}</S.Error>

      <S.SubmitButton
        type="submit"
        disabled={!isValid}
        data-testid="signup-button"
      >
        Sign Up
      </S.SubmitButton>
    </S.Form>
  );
}

export default SignUpForm;
