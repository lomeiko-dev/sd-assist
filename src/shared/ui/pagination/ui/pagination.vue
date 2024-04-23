<script setup lang="ts">
import { ref } from "vue";
import Numbered from "./components/numbered.vue";
import arrow_right from "shared/assets/img/icons/arrow-right.svg";
import inlineSvg from "vue-inline-svg";

interface IProps {
  totalCount: number;
}

const props = defineProps<IProps>();

const countes = Array.from({ length: props.totalCount }, (_, i) => i + 1);
const selectedNumber = ref(2);

const changeSelectedNumber = (index: number) => {
  selectedNumber.value = index;
};

const incrementSelectedNumber = () => {
  if (selectedNumber.value === 10) return;

  selectedNumber.value = selectedNumber.value + 1;
};

const dicrementSelectedNumber = () => {
  if (selectedNumber.value === 0) return;

  selectedNumber.value = selectedNumber.value - 1;
};
</script>
<template>
  <div class="flex flex-row items-center gap-[30px]">
    <button class="text-base font-normal text-gray-400 duration-300 hover:text-black">Назад</button>
    <div @click="dicrementSelectedNumber()" class="flex flex-row items-center gap-[10px]">
      <Numbered
        v-for="item in countes.slice(selectedNumber - (selectedNumber === 1 ? 1 : 2), selectedNumber + 1)"
        :num="item"
        :is-selected="selectedNumber === item"
        @click="changeSelectedNumber(item + 1)"
      />
      <p v-if="selectedNumber < props.totalCount - 2" class="text-sm font-normal text-gray-400 select-none">| ... |</p>
      <Numbered
        v-if="selectedNumber < props.totalCount - 1"
        @click="changeSelectedNumber(props.totalCount)"
        :is-selected="selectedNumber === props.totalCount"
        :num="props.totalCount"
      />
    </div>
    <button
      @click="incrementSelectedNumber()"
      class="flex flex-row items-center gap-2 text-base font-normal text-primary duration-300 hover:text-primary/70 hover:gap-3"
    >
      <p>Вперед</p>
      <inlineSvg class="mt-[2px]" :src="arrow_right" />
    </button>
  </div>
</template>
<style lang="scss"></style>
