<script setup lang="ts">
import { stepViewer } from "shared/ui/step-viewer";
import FormContainer from "./components/form-container.vue";
import carForm from "./forms/car-form.vue";
import lotForm from "./forms/lot-form.vue";
import mediaForm from "./forms/media-form.vue";
import characteristicForm from "./forms/characteristic-form.vue";

import inlineSvg from "vue-inline-svg";
import arrowRight from "shared/assets/icons/arrow-right.svg";
import { createLotStore } from "../model/store/create-lot-store";

const stepsName: string[] = [
  "Данные о лоте",
  "Основные данные об автомобиле",
  "Дополнительные характеристики",
  "Изображения лота",
];

const store = createLotStore()

</script>

<template>
  <div class="w-full max-w-[1182px]">
    <div class="flex flex-row gap-[13px]">
      <FormContainer class="w-full max-w-[941px]">
        <lotForm v-if="store.step === 1" />
        <carForm v-else-if="store.step === 2" />
        <characteristicForm v-else-if="store.step === 3" />
        <mediaForm v-else-if="store.step === 4" />
      </FormContainer>
      <FormContainer class="w-full max-w-[296px]">
        <stepViewer :steps="stepsName" :passed-number="store.step-1" :selected-index="store.step" />
      </FormContainer>
    </div>
    <div class="flex flex-row gap-[7px] items-end justify-end mt-[34px]">
      <button
        v-if="store.step > 1"
        @click="store.step--"
        class="border border-solid border-primary/50 rounded-[6px] flex items-center justify-center w-[92px] h-[47px] text-base font-normal text-primary duration-300 hover:bg-primary hover:text-white"
      >
        Назад
      </button>
      <button
        @click="store.validateProps"
        class="bg-primary w-[180px] h-[47px] rounded-[6px] flex items-center justify-center gap-[9px] duration-300 hover:bg-primary/70 hover:gap-[12px]"
      >
        <p class="text-base font-normal text-white">Далее</p>
        <inlineSvg class="fix-color" :src="arrowRight" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.fix-color {
  path {
    stroke: #fff !important;
  }
}
</style>
