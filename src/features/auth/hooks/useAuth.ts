import { AxiosError } from "axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../../utils/token/accessTokenUtils";
import { postSignIn } from "../api/authApi";
import { SignInRequest, SignInResponse } from "../api/authApi.type";
import { showAxiosError } from "../../../utils/axios/showAxiosError";
import {
  removeTokenFromAxiosDefualt,
  setTokenToAxiosDefault,
} from "../../../utils/axios/axiosTokenUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();

  const signIn = async (data: SignInRequest) => {
    if (getAccessToken()) {
      alert("You already signed in.");
      return false;
    }

    let responseData: SignInResponse;

    try {
      const response = await postSignIn(data);
      if (response.status != 200) {
        throw new Error("Something Wrong!");
      }
      responseData = response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        showAxiosError(error);
      } else {
        console.error(error);
      }

      setSignInError("이메일 또는 패스워드를 확인해주세요.");

      return false;
    }

    const token = responseData.access_token;

    setAccessToken(token);
    setTokenToAxiosDefault(token);

    return true;
  };

  const signOut = () => {
    removeAccessToken();
    removeTokenFromAxiosDefualt();
    navigate("/");
  };

  return { signIn, signOut, signInError };
}
