export const ACCESS_TOKEN_STORAGE = "access_token";

function setAccessToken(token: string) {
  if (!token) {
    return;
  }

  localStorage.setItem(ACCESS_TOKEN_STORAGE, token);
}

function getAccessToken() {
  const token: string | null = localStorage.getItem(ACCESS_TOKEN_STORAGE);

  if (!token) {
    console.warn("There is no Token");
    return null;
  }

  return token;
}

function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE);
}

export { getAccessToken, setAccessToken, removeAccessToken };
