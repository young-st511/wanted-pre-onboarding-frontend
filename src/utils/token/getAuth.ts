import { getAccessToken } from "./accessTokenUtils";

export function getAuth() {
  return !!getAccessToken();
}
