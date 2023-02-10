import axios from "axios";

function setTokenToAxiosDefault(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeTokenFromAxiosDefualt() {
  delete axios.defaults.headers.common.Authorization;
}

export { removeTokenFromAxiosDefualt, setTokenToAxiosDefault };
