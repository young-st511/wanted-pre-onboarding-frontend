import axios from "axios";
import { API_BASE_URL } from "../../api/ApiConstants";

export function setAxiosDefaultConfig() {
  axios.defaults.baseURL = API_BASE_URL;
}
