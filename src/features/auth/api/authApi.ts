import { postRequest } from "../../../api/requests";
import { AuthApiUrl, SignInRequest, SignInResponse } from "./authApi.type";

export async function postSignIn(data: SignInRequest) {
  const res = await postRequest<SignInResponse, SignInRequest>(
    AuthApiUrl.SIGN_IN,
    data
  );

  return res.data;
}
