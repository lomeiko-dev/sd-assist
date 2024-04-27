<script setup lang="ts">
import { ref } from "vue";
import loginForm from "./components/login-form.vue";
import registrationForm from "./components/registration-form.vue";

const isLogin = ref(true);
</script>
<template>
  <div>
    <div class="flex flex-col items-center w-full" v-if="isLogin">
      <h2 class="text-[32px] font-bold leading-[38.4px]">Авторизация</h2>
      <loginForm class="mt-[34px] w-full" />
      <button
        @click="isLogin = false"
        class="text-primary text-base font-normal border-b border-solid border-primary mt-[20px]"
      >
        Зарегистрироваться
      </button>
    </div>
    <div class="flex flex-col items-center w-full" v-else>
      <registrationForm class="w-full" />
      <button
        @click="isLogin = true"
        class="text-primary text-base font-normal border-b border-solid border-primary mt-[20px]"
      >
        Уже есть аккаунт?
      </button>
    </div>
  </div>
</template>
<style lang="scss"></style>
