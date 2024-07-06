<script setup lang="ts">
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import {authForm} from 'features/auth-form'
import Dialog from "primevue/dialog";
import inlineSvg from "vue-inline-svg";
import loginSvg from "shared/assets/icons/login.svg";

const { width } = useWindowSize();
const showAuth = ref(false);

</script>

<template>
  <button
    @click="showAuth = true"
    v-if="width > 1024"
    class="bg-primary ml-[20px] rounded-md flex justify-center items-center w-[180px] h-[47px] text-base font-normal text-white duration-300 hover:bg-primary/70"
  >
    Личный кабинет
  </button>
  <inlineSvg @click="showAuth = true" class="min-w-[47px]" v-else :src="loginSvg" />

  <Dialog class="w-[550px] p-0 dialog-button-login" modal v-model:visible="showAuth">
    <authForm @close-modal="showAuth = false" />
  </Dialog>
</template>
