import axios, { type AxiosRequestConfig } from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "./model/consts";
import { IClient } from "./model/types";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": false,
  },
});

export const ApiClient = async ({ data, method = "GET", url, params, headers }: IClient) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
  };

  API.defaults.headers = { ...API.defaults.headers, ...headers };

  return API(requestParams)
    .then((res) => ({ data: res.data, status: res.status, total: res.headers["X-Total-Count"] }))
    .catch((err) => {
      console.error("\nERROR MESSAGE:", err.response.data.message, `\nSTATUS: ${err.response.data.status}`);

      return { data: "isError", status: err.response.status };
    });
};
