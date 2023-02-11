import { FormEventHandler, useState } from "react";
import * as S from "../../../components/styles/FormStyle";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn, signInError } = useAuth();
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    
    const isSuccess = await signIn({ email, password });

    if (isSuccess) {
      navigate("/todo");
    }
  };

  return (
    <S.Box>
      <S.Title>Sign In</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label isError={!!signInError}>
          <S.LabelTitle>이메일</S.LabelTitle>
          <S.Input
            value={email}
            data-testid="email-input"
            onChange={({ currentTarget }) => setEmail(currentTarget.value)}
            required
          />
        </S.Label>
        <S.Label isError={!!signInError}>
          <S.LabelTitle>비밀번호</S.LabelTitle>
          <S.Input
            value={password}
            type="password"
            data-testid="password-input"
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
            required
          />
        </S.Label>

        {signInError ? <S.Error>{signInError}</S.Error> : null}

        <S.SubmitButton type="submit" data-testid="signin-button">
          Sign In
        </S.SubmitButton>
      </S.Form>
    </S.Box>
  );
}

export default SignInForm;
