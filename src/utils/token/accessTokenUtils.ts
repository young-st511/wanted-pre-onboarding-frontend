const ACCESS_TOKEN_STORAGE = "access_token";

function setAccessToken(token: string) {
  if (!token) {
    return;
  }

  localStorage.setItem(ACCESS_TOKEN_STORAGE, token);

  //! TEST
  console.log("token in!", localStorage.getItem(ACCESS_TOKEN_STORAGE));
}

function getAccessToken() {
  const token: string | null = localStorage.getItem(ACCESS_TOKEN_STORAGE);

  if (!token) {
    console.error("There is no Token");
    return null;
  }

  return token;
}

function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE);
}

export { getAccessToken, setAccessToken, removeAccessToken };