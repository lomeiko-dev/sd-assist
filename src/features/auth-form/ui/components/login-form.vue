<script setup lang="ts">
import { checkBox, inputPassword, inputText } from "shared/ui/input";
import { authFormStore } from "../../model/store/auth-form-store";
import { auth as authApi } from "../../model/api/auth";
import { authStore } from "entities/auth/model";

const storeForm = authFormStore();
const storeAuth = authStore();

const auth = async () => {
  const isValid = storeForm.validate();

  if (isValid) {
    const user = await authApi(storeForm.valueLogin, storeForm.valuePassword, {
      setError: (err) => (storeForm.error = err),
    });

    if (user) {
      storeAuth.login({ id: user.id, username: user.username });
      storeForm.clearAllError();
      storeForm.clearAllValue();

      if(storeForm.isRememberMy){
        storeAuth.saveAuth();
      }
    }
  }
};
</script>
<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4">
      <inputText
        placeholder="E-mail или телефон"
        :error-placeholder="storeForm.errorLogin"
        id="login"
        v-model="storeForm.valueLogin"
      />
      <inputPassword
        placeholder="Пароль"
        :error-placeholder="storeForm.errorPassword"
        id="password"
        v-model="storeForm.valuePassword"
      />
    </div>
    <checkBox v-model="storeForm.isRememberMy" id="check" placeholder="Запомнить меня?" />

    <div class="mt-[43px]">
      <p class="text-red-600" v-if="storeForm.error !== ''">{{ storeForm.error }}</p>
      <button
        @click="auth()"
        class="w-full h-[66px] mt-[10px] bg-primary text-white duration-300 rounded-[10px] hover:bg-primary/70"
      >
        Войти
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.auth-form .p-password-input {
  width: 100%;
  padding: 0 20px;
}
</style>
