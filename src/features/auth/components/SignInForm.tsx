import { useState } from "react";
import * as S from "../../../components/styles/FormStyle";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn, signInError } = useAuth();
  const handleSubmit = async () => {
    const isSuccess = await signIn({ email, password });

    if (isSuccess) {
      navigate("/todo");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        value={email}
        data-testid="email-input"
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <S.Input
        value={password}
        data-testid="password-input"
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <S.Error>{signInError}</S.Error>

      <S.SubmitButton type="submit" data-testid="signin-button">
        Sign In
      </S.SubmitButton>
    </S.Form>
  );
}

export default SignInForm;
