import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";
import { IRegRequetOptions } from "./types";
import { IRegistrationScheme } from "../types";

export const registration = async (body: IRegistrationScheme, options?: IRegRequetOptions) => {
  const checkEmail = await ApiClient({ url: `${Endpoints.USERS}?email_like=${body.email}` });

  if (checkEmail.data.length !== 0) {
    options?.setErrorEmail?.("Пользователь с такой почтой уже зарегестрирован");
    return null;
  }

  const checkPhone = await ApiClient({ url: `${Endpoints.USERS}?phone_like=${body.phone}` });

  if (checkPhone.data.length !== 0) {
    options?.setErrorPhone?.("Пользователь с таким телефоном уже зарегестрирован");
    return null;
  }

  if (body.typeAccount === 2) {
    const checkINN = await ApiClient({ url: `${Endpoints.USERS}?INN_like=${body.INN}` });

    if (checkINN.data.length !== 0) {
      options?.setErrorINN?.("Пользователь с таким ИНН уже зарегестрирован");
      return null;
    }
  }

  const result = await ApiClient({ url: `${Endpoints.USERS}`, method: "POST", data: body });
  options?.clearField?.();
  return result.data;
};
