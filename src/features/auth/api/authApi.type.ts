import { ApiDomains } from "../../../api/ApiConstants";

export const AuthApiUrl = {
  /**
   * `POST`: Sign In
   * - Status: `200 OK`
   */
  SIGN_IN: ApiDomains.AUTH + "/signin",
} as const;

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}
