<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import user from "shared/assets/icons/user.svg";
import inlineSvg from "vue-inline-svg";

const { width } = useWindowSize();

</script>
<template>
  <button :class="width < 1024 ? 'mr-2' : 'w-[47px] h-[47px] border border-solid border-gray rounded-full duration-300 hover:bg-gray'" class="flex items-center justify-center">
    <inlineSvg :class="width < 1024 ? 'w-[24px] h-[24px]' : ''" :src="user" />
  </button>
</template>
<style  lang="scss">
</style>
