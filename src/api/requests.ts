import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const postRequest = async <TRes, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D> | undefined
) => {
  const response = await axios.post<TRes, AxiosResponse<TRes, D>, D>(
    url,
    data,
    config
  );

  return response;
};

const getRequest = async <TRes>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  const response = await axios.get<TRes>(url, config);

  return response;
};

const putRequest = async <TRes, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> | undefined
) => {
  const response = await axios.put<TRes, AxiosResponse<TRes, D>, D>(
    url,
    data,
    config
  );

  return response;
};

const deleteRequest = async <TRes>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  const response = await axios.delete<TRes>(url, config);

  return response;
};

export { postRequest, getRequest, putRequest, deleteRequest };
