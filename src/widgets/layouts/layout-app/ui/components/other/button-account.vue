<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { authStore } from "entities/auth";
import user from "shared/assets/icons/user.svg";
import inlineSvg from "vue-inline-svg";

const { width } = useWindowSize();
const auth = authStore()

const buttonClick = () => {
  auth.logout()
}

</script>
<template>
  <button @click="buttonClick" :class="width < 1024 ? 'mr-2' : 'w-[47px] h-[47px] border border-solid border-gray rounded-full duration-300 hover:bg-gray'" class="flex items-center justify-center">
    <inlineSvg :class="width < 1024 ? 'w-[24px] h-[24px]' : ''" :src="user" />
  </button>
</template>
