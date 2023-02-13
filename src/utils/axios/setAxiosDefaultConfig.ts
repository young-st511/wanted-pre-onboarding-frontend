import axios from "axios";
import { API_BASE_URL } from "../../api/ApiConstants";
import { getAccessToken } from "../token/accessTokenUtils";
import { getAuth } from "../token/getAuth";

export function setAxiosDefaultConfig() {
  const auth = getAuth();
  axios.defaults.baseURL = API_BASE_URL;

  if (auth) {
    axios.defaults.headers.common.Authorization = "Bearer " + getAccessToken();
  }
}
