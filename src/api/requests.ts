import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

async function postRequest<TRes, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D> | undefined
) {
  const response = await axios.post<TRes, AxiosResponse<TRes, D>, D>(
    url,
    data,
    config
  );

  return response;
}

async function getRequest<TRes>(
  url: string,
  config?: AxiosRequestConfig | undefined
) {
  const response = await axios.get<TRes>(url, config);

  return response;
}

async function putRequest<TRes, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> | undefined
) {
  const response = await axios.put<TRes, AxiosResponse<TRes, D>, D>(
    url,
    data,
    config
  );

  return response;
}

async function deleteRequest<TRes>(
  url: string,
  config?: AxiosRequestConfig | undefined
) {
  const response = await axios.delete<TRes>(url, config);

  return response;
}

export { postRequest, getRequest, putRequest, deleteRequest };
