import { IUser } from "entities/user";
import { IErrors } from "../types";
import { validateEmail } from "shared/lib/utils/validate-email";

interface IValidateResult {
  errors: IErrors;
  isValid: boolean;
}

interface IValidateProps extends Omit<IUser, "id" | "username" | "roleAuctioneer" | "dateCreated" | "dateUpdated"> {
  isDataProcessing: boolean;
}

export const validateValue = (data: IValidateProps): IValidateResult => {
  const errors: IErrors = {
    errorINN: "",
    errorName: "",
    errorPhone: "",
    errorEmail: "",
    errorPassword: "",
    errorDataProcessing: "",
  };

  let isValid = true;

  if (data.typeAccount === 2 && data.INN === "") {
    errors.errorINN = "Необходимо заполнить ИНН";
    isValid = false;
  }

  if (data.typeAccount === 1 && data.nickname === "") {
    errors.errorName = "Необходимо заполнить ФИО";
    isValid = false;
  }

  if (data.phone === "") {
    errors.errorPhone = "Необходимо заполнить телефон";
    isValid = false;
  }

  if (data.password === "") {
    errors.errorPassword = "Необходимо заполнить пароль";
    isValid = false;
  }

  if (data.password.length < 6) {
    errors.errorPassword = "Пароль должен быть не менее 6 символов";
    isValid = false;
  }

  if (data.email === "") {
    errors.errorEmail = "Необходимо заполнить email";
    isValid = false;
  }

  if (!validateEmail(data.email)) {
    errors.errorEmail = "Некорректный email";
    isValid = false;
  }

  if (data.isDataProcessing === false) {
    errors.errorDataProcessing = "Необходимо согласиться с условиями";
    isValid = false;
  }

  return {
    errors,
    isValid,
  };
};
