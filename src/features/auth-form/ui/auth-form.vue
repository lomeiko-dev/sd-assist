<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import loginForm from "./components/login-form.vue";
import registrationForm from "./components/registration-form.vue";
import Toast from "primevue/toast";

const emit = defineEmits(['closeModal'])
const isLogin = ref(true);
const toast = useToast();

const registerHandle = () => {
  toast.add({
    severity: "success",
    summary: "Аккаунт успешно зарегестрирован!",
    detail: "Войдите в аккаунт",
    life: 3000,
  });
  isLogin.value = true;
};

</script>
<template>
  <div>
    <Teleport to="body">
      <Toast position="top-right" />
    </Teleport>

    <div class="flex flex-col items-center w-full" v-if="isLogin">
      <h2 class="text-[32px] font-bold leading-[38.4px]">Авторизация</h2>
      <loginForm @on-login="$emit('closeModal')" class="mt-[34px] w-full" />
      <button
        @click="isLogin = false"
        class="text-primary text-base font-normal border-b border-solid border-primary mt-[20px]"
      >
        Зарегистрироваться
      </button>
    </div>
    <div class="flex flex-col items-center w-full" v-else>
      <registrationForm @on-register="registerHandle" class="w-full" />
      <button
        @click="isLogin = true"
        class="text-primary text-base font-normal border-b border-solid border-primary mt-[20px]"
      >
        Уже есть аккаунт?
      </button>
    </div>
  </div>
</template>
