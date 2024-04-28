<script setup lang="ts">
import logo from "shared/assets/img/logo/logo.webp";
import logo_partner from "shared/assets/img/logo/logo_partner.webp";
import BurgerMenu from "./other/burger-menu.vue";
import { container } from "shared/ui/container";
import ButtonLogin from "./other/button-login.vue";
import { useWindowSize } from "@vueuse/core";
import inlineSvg from "vue-inline-svg";
import search from "shared/assets/icons/search.svg";
import ButtonAccount from "./other/button-account.vue";
import { authStore } from "entities/auth";

const { width } = useWindowSize();
const {isAuth} = authStore()

</script>
<template>
  <div class="border-b border-solid border-primary/20 tablet:h-[108px] h-[68px]">
    <container class="relative flex flex-row items-center sxga:justify-normal justify-center h-full w-full">
      <div class="tablet:mr-[128px] mr-[10px]">
        <div
          class="absolute top-0 left-0 h-full border-x border-solid border-primary/20 tablet:px-[22px] px-[31px] flex items-center"
        >
          <BurgerMenu />
        </div>
      </div>

      <h1 class="tablet:mr-[49px]">
        <img class="tablet:min-w-[221px] w-[132px]" :src="logo" alt="logo" />
        <div class="flex flex-row items-center mt-[10px] tablet:gap-3 justify-end">
          <p class="tablet:text-xs text-[8px] font-normal text-gray-400 mt-[2px] whitespace-nowrap">В партнерстве с</p>
          <img class="w-[62px]" :src="logo_partner" alt="logo partner" />
        </div>
      </h1>

      <div class="sxga:flex flex-row gap-[5px] laptop:mr-[123px] mr-10 hidden">
        <p class="text-sm text-gray-400 font-normal whitespace-nowrap">Проведено торгов:</p>
        <p class="text-sm font-bold text-primary">{{ 12345 }}</p>
      </div>

      <div
        class="tablet:flex items-center hidden h-[47px] w-full sxga:max-w-[280px] mr-[20px] duration-700 rounded-md border border-solid border-primary/20 hover:border-primary"
      >
        <inlineSvg class="w-[15px] h-[15px] ml-[22px] mr-[15px]" :src="search" />
        <input
          placeholder="Поиск по лотам"
          class="text-base font-normal outline-none"
          type="text"
        />
      </div>
      <div
        :class="
          width < 768
            ? 'absolute right-0 h-full flex items-center px-[17px] border-x border-solid border-primary/20'
            : 'sxga:w-full max-w-[180px]'
        "
      >
        <ButtonLogin v-if="!isAuth" />
        <ButtonAccount v-else/>
      </div>
    </container>
  </div>
</template>
