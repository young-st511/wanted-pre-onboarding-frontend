import { postRequest } from "../../../api/requests";
import { SignUpApiUrl, SignUpRequest } from "./signUpApi.type";

/**
 * `POST`: Sign Up
 * - Status: `201 Created`
 */
export function postSignUp(data: SignUpRequest) {
  return postRequest<null, SignUpRequest>(SignUpApiUrl.SIGN_IN, data);
}
