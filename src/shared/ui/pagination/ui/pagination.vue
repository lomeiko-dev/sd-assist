<script setup lang="ts">
import { ref } from "vue";
import Numbered from "./components/numbered.vue";
import arrow_right from "shared/assets/icons/arrow-right.svg";
import inlineSvg from "vue-inline-svg";

interface IProps {
  totalCount: number;
}

const emit = defineEmits(["setPage"]);
const props = defineProps<IProps>();

const countes = Array.from({ length: props.totalCount }, (_, i) => i + 1);
const selectedNumber = ref(1);

const changeSelectedNumber = (index: number) => {
  selectedNumber.value = index;
  emit("setPage", index);
};

const incrementSelectedNumber = () => {
  if (selectedNumber.value === props.totalCount) return;
  changeSelectedNumber(selectedNumber.value + 1);
};

const dicrementSelectedNumber = () => {
  if (selectedNumber.value === 0) return;
  changeSelectedNumber(selectedNumber.value - 1);
};
</script>
<template>
  <div class="flex flex-row flex-wrap justify-center items-center gap-[30px]">
    <button
      @click="dicrementSelectedNumber()"
      class="text-base font-normal text-gray-400 duration-300 hover:text-black"
    >
      Назад
    </button>
    <div class="flex flex-row items-center gap-[10px]">
      <div class="flex flex-row items-center gap-[10px]" v-if="selectedNumber > 3">
        <Numbered :num="1" :is-selected="selectedNumber === 1" @click="changeSelectedNumber(1)" />
        <p class="text-sm font-normal text-gray-400 select-none">| ... |</p>
      </div>
      <Numbered
        v-for="item in countes.slice(
          selectedNumber - (selectedNumber === 1 ? 1 : 2),
          selectedNumber + (selectedNumber === 1 ? 2 : 1)
        )"
        :num="item"
        :is-selected="selectedNumber === item"
        @click="changeSelectedNumber(item)"
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
