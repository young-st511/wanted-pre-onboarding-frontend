import { ApiDomains } from "../../../api/ApiConstants";

export const SignUpApiUrl = {
  /**
   * `POST`: Sign Up
   * - Status: `201 Created`
   */
  SIGN_IN: ApiDomains.AUTH + "/signup",
} as const;

export interface SignUpRequest {
  email: string;
  password: string;
}
