<script setup lang="ts">
import { Routes } from "shared/config/routes";
import { useRouter } from "vue-router";
import { useWindowSize } from "@vueuse/core";
import inlineSvg from "vue-inline-svg";
import plusIcon from "shared/assets/icons/plus.svg";

const router = useRouter();
const { width } = useWindowSize();

const goCreateLotHandler = () => {
  router.push({ name: Routes.LOT_CREATOR.name });
};
</script>
<template>
  <button
    @click="goCreateLotHandler"
    class="flex flex-row gap-[9px] items-center justify-center bg-primary py-[12px] rounded-md duration-300 hover:bg-primary/70"
  >
    <inlineSvg :src="plusIcon" />
    <p v-if="width > 1024" class="text-white text-base font-normal">Добавить лот</p>
  </button>
</template>
