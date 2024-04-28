import { defineStore } from "pinia";
import { ref } from "vue";
import { IAuth } from "../types";

export const authStore = defineStore("auth", () => {
  const isAuth = ref(false);
  const authData = ref<IAuth | undefined>(undefined);

  const login = (auth: IAuth) => {
    authData.value = auth;
    isAuth.value = true;
  };

  const loadAuth = () => {
    const jsonData = localStorage.getItem("auth");

    if (jsonData) {
      const auth = JSON.parse(jsonData || "") as IAuth;
      if (auth) {
        authData.value = auth;
        isAuth.value = true;
      }
    }
  };

  const saveAuth = () => {
    if (authData.value) localStorage.setItem("auth", JSON.stringify(authData.value));
  };

  const logout = () => {
    localStorage.removeItem("auth");
    isAuth.value = false;
    authData.value = undefined;
  };

  return {
    isAuth,
    authData,
    login,
    loadAuth,
    saveAuth,
    logout,
  };
});
