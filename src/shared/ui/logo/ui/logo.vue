<script setup lang="ts">
import { Routes } from "shared/config/routes";
import { useRouter } from "vue-router";
import logo from "shared/assets/img/logo/logo.webp";
import logo_partner from "shared/assets/img/logo/logo_partner.webp";

const router = useRouter();

const goToHomeHandler = () => {
  router.push({ name: Routes.HOME.name });
};
</script>
<template>
  <h1 @click="goToHomeHandler" class="cursor-pointer">
    <img class="tablet:min-w-[221px] w-[132px]" :src="logo" alt="logo" />
    <div class="flex flex-row items-center mt-[10px] tablet:gap-3 justify-end">
      <p class="tablet:text-xs text-[8px] font-normal text-gray-400 mt-[2px] whitespace-nowrap">В партнерстве с</p>
      <img class="w-[62px]" :src="logo_partner" alt="logo partner" />
    </div>
  </h1>
</template>
