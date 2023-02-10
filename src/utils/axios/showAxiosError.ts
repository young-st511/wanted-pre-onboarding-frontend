import { AxiosError } from "axios";

export function showAxiosError(error: AxiosError) {
  console.error("ERROR_NAME:", error.name);
  console.error("ERROR_CODE:", error.code);
  console.error("ERROR_MESSAGE:", error.message);
  console.error("ERROR_RESPONSE:", error.response);
}
