import { ACCESS_TOKEN_STORAGE } from "./accessTokenUtils";

export function getAuth() {
  return !!localStorage.getItem(ACCESS_TOKEN_STORAGE);
}
