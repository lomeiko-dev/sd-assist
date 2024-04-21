<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import mir from "shared/assets/img/logo/mir.png";
import visa from "shared/assets/img/logo/visa.png";
import master_card from "shared/assets/img/logo/master_card.png";

import vk from "shared/assets/icons/vk.svg";
import facebook from "shared/assets/icons/facebook.svg";
import instagram from "shared/assets/icons/instagram.svg";
import union from "shared/assets/icons/Union.svg";
import { container } from "shared/ui/container";
import { useWindowSize } from "@vueuse/core";

const {width} = useWindowSize()

</script>
<template>
  <div class="bg-smoky-white tablet:h-[410px] h-[632px] flex items-center rounded-t-[50px]">
    <container class="flex tablet:flex-row flex-col-reverse justify-between tablet:ml-auto ml-[30px]">
      <div class="w-full tablet:ml-[10px] tablet:mt-0 mt-[34px]">
        <div class="flex flex-col gap-[10px]">
          <a class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#">О компании</a>
          <a class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#">Партнеры</a>
          <a class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#">Новости</a>
          <a class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#"
            >Документация / Регламенты</a
          >
          <a v-if="width > 768" class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#">Вход</a>
          <a v-if="width > 768" class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#">Регистрация</a>
          <a class="text-base font-normal leading-[19.2px] text-primary duration-300 hover:text-black" href="#"
            >Проверка транспортного средства</a
          >
        </div>
        <div class="flex flex-row gap-[20px] items-center mt-[20px]">
          <img class="w-[74px] h-[24px]" :src="visa" alt="visa" />
          <img :src="master_card" alt="master card" />
          <img class="w-[74px] h-[24px]" :src="mir" alt="mir" />
        </div>
        <div class="mt-[29px]">
          <p class="text-xs font-normal text-primary">2009 - {{ new Date().getFullYear() }} © Все права защищены.</p>
        </div>
      </div>
      <div class="w-full tablet:ml-[6px] -mt-[5px]">
        <div class="flex flex-col gap-[10px] sxga:leading-[38.4px] leading-[28.8px] sxga:text-[32px] sxga:font-bold text-2xl font-medium text-primary">
          <div class="flex sxga:flex-row flex-col sxga:items-center sxga:gap-[10px]">
            <a class="duration-300 hover:text-black" href="tel:8 800 550-26-65">8 800 550-26-65</a>
            <p class="text-xs font-normal">Звонок по России бесплатный</p>
          </div>
          <a class="duration-300 hover:text-black" href="mail:assist@sd-assist.ru">assist@sd-assist.ru</a>
          <a class="duration-300 hover:text-black" href="mail:auction@sd-assist.ru">auction@sd-assist.ru</a>
        </div>
        <div class="flex flex-row gap-[10px] items-center sxga:mt-[30px] mt-[22px]">
          <div class="flex flex-row gap-[10px]">
            <a href="#">
              <inlineSvg class="sxga:w-[32px] w-[26px]" :src="vk" />
            </a>
            <a href="#">
              <inlineSvg class="sxga:w-[32px] w-[26px]" :src="facebook" />
            </a>
            <a href="#">
              <inlineSvg class="sxga:w-[32px] w-[26px]" :src="instagram" />
            </a>
            <a href="#">
              <inlineSvg class="sxga:w-[32px] w-[26px]" :src="union" />
            </a>
          </div>
          <p class="whitespace-nowrap">Мы в соцсетях</p>
        </div>
        <div class="sxga:mt-[30px] mt-[43px]">
          <p class="sxga:text-base text-xs font-normal text-primary w-full sxga:max-w-[100%] max-w-[290px]">
            Свидетельство о регистрации электронного СМИ ЭЛ № ФС 77 - 76018 выдано Федеральной службой по надзору в
            сфере связи, информационных технологий и массовых коммуникаций 24.06.2019 года
          </p>
        </div>
      </div>
    </container>
  </div>
</template>
<style lang="scss"></style>
