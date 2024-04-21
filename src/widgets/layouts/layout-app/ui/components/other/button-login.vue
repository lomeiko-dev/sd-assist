<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import loginSvg from "shared/assets/icons/login.svg";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <button
    v-if="width > 1024"
    class="bg-primary rounded-md flex justify-center items-center w-full max-w-[180px] h-[47px] text-base font-normal text-white duration-300 hover:bg-primary/70"
  >
    Личный кабинет
  </button>
  <inlineSvg class="min-w-[47px]" v-else :src="loginSvg" />
</template>
<style lang="scss"></style>
