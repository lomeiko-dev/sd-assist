import { ApiClient, Endpoints, BASE_API } from "shared/api";
import { IRegRequetOptions } from "./types";
import { IRegistrationScheme } from "../types";

export const registration = async (body: IRegistrationScheme, options?: IRegRequetOptions) => {
  const checkEmail = await ApiClient({ url: `${Endpoints.USERS}?email_like=${body.email}` }, BASE_API);

  if (checkEmail.data.length !== 0) {
    options?.setErrorEmail?.("Пользователь с такой почтой уже зарегестрирован");
    return null;
  }

  const checkPhone = await ApiClient({ url: `${Endpoints.USERS}?phone_like=${body.phone}` }, BASE_API);

  if (checkPhone.data.length !== 0) {
    options?.setErrorPhone?.("Пользователь с таким телефоном уже зарегестрирован");
    return null;
  }

  if (body.typeAccount === 2) {
    const checkINN = await ApiClient({ url: `${Endpoints.USERS}?INN_like=${body.INN}` }, BASE_API);

    if (checkINN.data.length !== 0) {
      options?.setErrorINN?.("Пользователь с таким ИНН уже зарегестрирован");
      return null;
    }
  }

  const result = await ApiClient({ url: `${Endpoints.USERS}`, method: "POST", data: body }, BASE_API);
  options?.clearField?.();
  return result.data;
};
