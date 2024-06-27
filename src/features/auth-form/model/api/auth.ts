import { ApiClient, Endpoints, BASE_API } from "shared/api";
import { IAuthRequetOptions } from "./types";

const ERROR_MESSAGE = "Неверный логин или пароль";

export const auth = async (login: string, password: string, options?: IAuthRequetOptions) => {
  const resultAuthByEmail = await ApiClient(
    {
      url: `${Endpoints.USERS}?email_like=${login}&password_like=${password}`,
    },
    BASE_API
  );

  if (resultAuthByEmail.data.length === 0) options?.setError?.(ERROR_MESSAGE);
  else {
    options?.clearField?.();
    return resultAuthByEmail.data[0];
  }

  const resultAuthByPhone = await ApiClient(
    {
      url: `${Endpoints.USERS}?phone_like=${login.replace("+", "").replace(" ", "")}&password_like=${password}`,
    },
    BASE_API
  );

  if (resultAuthByPhone.data.length === 0) options?.setError?.(ERROR_MESSAGE);
  else {
    options?.clearField?.();
    return resultAuthByPhone.data[0];
  }
};
