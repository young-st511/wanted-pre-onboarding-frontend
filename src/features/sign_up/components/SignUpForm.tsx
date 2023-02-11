import { useNavigate } from "react-router-dom";
import { useSignUpForm } from "../hooks/useSignUp";
import * as S from "../../../components/styles/FormStyle";

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
    <S.Box>
      <S.Title>Sign Up</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label isError={!!emailError}>
          <S.LabelTitle>이메일</S.LabelTitle>
          <S.Input
            value={email}
            data-testid="email-input"
            onChange={({ currentTarget }) => setEmail(currentTarget.value)}
            required
          />
          {emailError ? <S.Error>{emailError}</S.Error> : null}
        </S.Label>

        <S.Label isError={!!passwordError}>
          <S.LabelTitle>비밀번호</S.LabelTitle>
          <S.Input
            value={password}
            data-testid="password-input"
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
            type="password"
            required
          />
          {passwordError ? <S.Error>{passwordError}</S.Error> : null}
        </S.Label>

        <S.SubmitButton
          type="submit"
          disabled={!isValid}
          data-testid="signup-button"
        >
          Sign Up
        </S.SubmitButton>
      </S.Form>
    </S.Box>
  );
}

export default SignUpForm;
