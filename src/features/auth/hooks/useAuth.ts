import { AxiosError } from "axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../../utils/token/accessTokenUtils";
import { postSignIn } from "../api/authApi";
import { SignInRequest, SignInResponse } from "../api/authApi.type";
import { showAxiosError } from "../../../utils/axios/showAxiosError";
import { setTokenToAxiosDefault } from "../../../utils/axios/axiosTokenUtils";

export function useAuth() {
  return { signIn, signOut };
}

async function signIn(data: SignInRequest) {
  if (getAccessToken()) {
    alert("You already signed in.");
    return false;
  }

  let response: SignInResponse;

  try {
    response = await postSignIn(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }

    return false;
  }

  const token = response.access_token;

  setAccessToken(token);
  setTokenToAxiosDefault(token);

  return true;
}

function signOut() {
  removeAccessToken();
}
