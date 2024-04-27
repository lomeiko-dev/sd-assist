import { defineStore } from "pinia";
import { ref } from "vue";

export const authFormStore = defineStore("auth-form", () => {
  const error = ref("");
  const errorPassword = ref("");
  const errorLogin = ref("");

  const valuePassword = ref("");
  const valueLogin = ref("");

  const isRememberMy = ref(false);

  const validate = () => {
    clearAllError();
    if (valuePassword.value === "") {
      errorPassword.value = "Укажите пароль";
      return false;
    }

    if (valueLogin.value === "") {
      errorLogin.value = "Укажите логин";
      return false;
    }

    return true;
  };

  const clearAllError = () => {
    errorPassword.value = "";
    errorLogin.value = "";
  };

  const clearAllValue = () => {
    valuePassword.value = "";
    valueLogin.value = "";
  };

  return {
    errorPassword,
    errorLogin,
    valuePassword,
    valueLogin,
    error,
    isRememberMy,
    validate,
    clearAllError,
    clearAllValue,
  };
});
