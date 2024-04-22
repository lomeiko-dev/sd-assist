<script setup lang="ts">
import { ref } from "vue";
import { ICar } from "../model/types";
interface IProps {
  data: ICar;
  isMobile?: boolean;
}

const props = defineProps<IProps>();

const isHover = ref(false);
const emit = defineEmits(["to"]);
</script>
<template>
  <div
    @mouseenter="!props.isMobile ? (isHover = true) : null"
    @mouseleave="!props.isMobile ? (isHover = false) : null"
    @click="props.isMobile ? $emit('to') : null"
    :class="props.isMobile ? 'hovered-mobile' : 'hovered'"
    class="relative border border-solid overflow-hidden border-gray-300 p-[7px] w-full max-w-[380px] rounded-[10px] duration-300 cursor-pointer z-20"
  >
    <div class="relative">
      <div :style="`background-image: url(${props.data.image_preview})`" class="preview rounded-[10px]"></div>
      <div
        class="flex items-center justify-center bg-primary absolute top-[13px] left-0 w-[192px] h-[39px] rounded-r-lg"
      >
        <h4 class="text-2xl font-bold text-white">{{ props.data.default_rate }} ₽</h4>
      </div>
    </div>
    <div class="content mx-[20px] mb-[24px]">
      <div class="mt-[28px] pb-[18px] border-b border-solid border-gray-300">
        <h3 class="tablet:text-[22px] text-lg font-medium leading-[24.2px]">{{ props.data.title }}</h3>
      </div>
      <div class="flex flex-col gap-[22px] mt-[19px]">
        <div class="flex flex-row justify-between">
          <p class="tablet:text-base text-sm font-normal">Лот:</p>
          <div class="text-sm flex" :class="props.data.isOpen ? 'text-green-600' : 'text-red-600'">
            <p class="font-bold">{{ props.data.id_lot }}</p>
            <p>{{ props.data.isOpen ? "(Открытый)" : "(Закрытый)" }}</p>
          </div>
        </div>
        <div class="tablet:text-base text-sm font-normal flex flex-row justify-between">
          <p>Город:</p>
          <p>{{ props.data.country }}</p>
        </div>
        <div class="tablet:text-base text-sm font-normal flex flex-row justify-between">
          <p>Пробег:</p>
          <p>{{ props.data.mileage }}</p>
        </div>
        <div class="tablet:text-base text-sm font-normal flex flex-row justify-between">
          <p>КПП:</p>
          <p>{{ props.data.KPP }}</p>
        </div>
        <div class="tablet:text-base text-sm font-normal flex flex-row justify-between">
          <p>Двигатель:</p>
          <p>{{ props.data.engine }}</p>
        </div>
      </div>
      <button
        @click="$emit('to')"
        :class="isHover ? 'opacity-100' : 'opacity-0'"
        class="absolute -bottom-[60px] left-0 mt-[31px] -z-50 bg-primary w-full max-w-[320px] h-[38px] text-base font-normal duration-300 text-white rounded-md hover:bg-primary/70"
      >
        Участвовать в торгах
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hovered:hover {
  transform: translate(0, 35px) scaleX(1.05) scaleY(1.2);
  position: relative;
  background-color: white;
  border: 1px solid transparent;
  box-shadow: 0px 14px 24px 0px #00000040;
  z-index: 30;

  .content {
    transition: 0.3s;
    margin-top: -30px;
    transform: scaleY(0.8);
  }
}

.hovered-mobile:hover {
  box-shadow: 0px 14px 24px 0px #00000040;
}

.preview {
  height: 203px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sell {
  border-top: 100px solid #163c66;
  border-right: 100px solid transparent;
}
</style>
