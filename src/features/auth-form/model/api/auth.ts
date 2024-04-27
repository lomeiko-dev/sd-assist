import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";
import { IRequetOptions } from "./types";

const ERROR_MESSAGE = "Неверный логин или пароль";

export const auth = async (login: string, password: string, options?: IRequetOptions) => {
  const resultAuthByEmail = await ApiClient({
    url: `${Endpoints.USERS}?email_like=${login}&password_like=${password}`,
  });

  if (resultAuthByEmail.data.length === 0) options?.setError?.(ERROR_MESSAGE);
  else return resultAuthByEmail.data[0];

  const resultAuthByPhone = await ApiClient({
    url: `${Endpoints.USERS}?phone_like=${login}&password_like=${password}`,
  });

  if (resultAuthByPhone.data.length === 0) options?.setError?.(ERROR_MESSAGE);
  else return resultAuthByPhone.data[0];
};
