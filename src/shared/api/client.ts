import { AxiosInstance, type AxiosRequestConfig } from "axios";
import { IClient } from "./model/types";

export const ApiClient = async ({ data, method = "GET", url, params, headers }: IClient, scheme: AxiosInstance) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
  };

  scheme.defaults.headers = { ...scheme.defaults.headers, ...headers };

  return scheme(requestParams)
    .then((res) => ({ data: res.data, status: res.status, total: res.headers["x-total-count"] }))
    .catch((err) => {
      console.error("\nERROR MESSAGE:", err.response?.data.message, `\nSTATUS: ${err.response?.data.status}`);

      return { data: "isError", status: err.response?.status, total: "0" };
    });
};
