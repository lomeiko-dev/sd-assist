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
import Dialog from "primevue/dialog";
import PriceForm from "./forms/price-form.vue";
import { useWindowSize } from "@vueuse/core/index.cjs";

const stepsName: string[] = [
  "Данные о лоте",
  "Основные данные об автомобиле",
  "Дополнительные характеристики",
  "Изображения лота",
];

const store = createLotStore();

const { width } = useWindowSize();

const createNewLotHandle = async () => {
  store.createLot();
};
</script>

<template>
  <div class="w-full max-w-[1182px]">
    <button @click="console.log(store.fieldsManagmant.object)">test</button>
    <div class="flex tablet:flex-row flex-col-reverse gap-[13px]">
      <FormContainer class="w-full max-w-[941px]">
        <lotForm :managment="store.fieldsManagmant" v-if="store.step === 1" />
        <carForm :managment="store.fieldsManagmant" v-else-if="store.step === 2" />
        <characteristicForm :managment="store.fieldsManagmant" v-else-if="store.step === 3" />
        <mediaForm :managment="store.fieldsManagmant" v-else-if="store.step === 4 || store.step === 5" />
      </FormContainer>
      <FormContainer padding="20px" class="w-full tablet:max-w-[296px] foggy-container">
        <stepViewer
          class="w-[100%] tablet:h-[100%] h-[25px]"
          :is-mobile="width < 768"
          :steps="stepsName"
          :passed-number="store.step - 1"
          :selected-index="store.step"
        />
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
        @click="store.nextStep(store.fieldsManagmant.validateProps)"
        class="bg-primary w-[180px] h-[47px] rounded-[6px] flex items-center justify-center gap-[9px] duration-300 hover:bg-primary/70 hover:gap-[12px]"
      >
        <p class="text-base font-normal text-white">Далее</p>
        <inlineSvg class="fix-color" :src="arrowRight" />
      </button>
    </div>

    <Dialog v-model:visible="store.isShowModal" modal>
      <template #default>
        <PriceForm :managment="store.fieldsManagmant" />
      </template>
      <template #footer>
        <button @click="createNewLotHandle" class="duration-300 px-5 py-3 rounded-md hover:bg-gray/50">
          Создать лот
        </button>
      </template>
    </Dialog>
  </div>
</template>

<style lang="scss">
.fix-color {
  path {
    stroke: #fff !important;
  }
}

@media (max-width: 768px) {
  .foggy-container {
    position: relative;
    background: #f2f8ff;
    background-size: cover;
    overflow: hidden;
  }

  .foggy-container::before,
  .foggy-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  .foggy-container::before {
    left: 0;
  }

  .foggy-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
}
</style>
