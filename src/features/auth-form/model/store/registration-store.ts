import { defineStore } from "pinia";
import { ref } from "vue";
import { IRegistrationScheme } from "../types";
import { validateValue } from "./lib/validate";
import { IErrors } from "./types";

export const registrationStore = defineStore("registration", () => {
  const errors = ref<IErrors>({
    errorName: "",
    errorINN: "",
    errorPhone: "",
    errorEmail: "",
    errorPassword: "",
    errorDataProcessing: "",
  });

  const typeAccount = ref(1);
  const valueINN = ref("");
  const valueName = ref("");
  const valuePhone = ref("");
  const valueEmail = ref("");
  const valuePassword = ref("");
  const roleAuctioneer = ref(1);
  const isDataProcessing = ref(false);

  const validate = () => {
    clearAllError();

    const { errors: errorValid, isValid } = validateValue({
      email: valueEmail.value,
      nickname: valueName.value,
      phone: valuePhone.value,
      password: valuePassword.value,
      typeAccount: typeAccount.value,
      INN: valueINN.value,
      isDataProcessing: isDataProcessing.value,
    });

    errors.value = errorValid;

    return isValid;
  };

  const getBodyData = (): IRegistrationScheme => {
    return {
      username: `${valueName.value}#${Math.random().toString(16).slice(2)}`,
      typeAccount: typeAccount.value,
      INN: valueINN.value,
      nickname: valueName.value,
      phone: valuePhone.value.replace(/\D/g, ""),
      email: valueEmail.value,
      password: valuePassword.value,
      roleAuctioneer: roleAuctioneer.value,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    };
  };

  const clearAllError = () => {
    errors.value.errorINN = "";
    errors.value.errorName = "";
    errors.value.errorPhone = "";
    errors.value.errorEmail = "";
    errors.value.errorPassword = "";
    errors.value.errorDataProcessing = "";
  };

  const clearAllValue = () => {
    valueINN.value = "";
    valueName.value = "";
    valuePhone.value = "";
    valueEmail.value = "";
    valuePassword.value = "";
    typeAccount.value = 1;
    roleAuctioneer.value = 1;
    isDataProcessing.value = false;
  };

  return {
    errors,
    typeAccount,
    valueINN,
    valueName,
    valuePhone,
    valueEmail,
    valuePassword,
    isDataProcessing,
    roleAuctioneer,
    clearAllValue,
    clearAllError,
    getBodyData,
    validate,
  };
});
