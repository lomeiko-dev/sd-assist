<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import search from "shared/assets/icons/search.svg";
import { ref } from "vue";
import { filterStore } from "../model";

const isActive = ref(false);
const searchField = ref("");
const store = filterStore();

const searchHandler = () => {
  store.changeSearchedString(`q=${searchField.value}`);
  isActive.value = false;
};

const onFocus = () => {
  isActive.value = true;
};
</script>
<template>
  <div
    class="tablet:flex relative flex-row items-center hidden h-[47px] w-full sxga:max-w-[313px] duration-700 rounded-md border border-solid border-primary/20 hover:border-primary"
  >
    <button
      @click="searchHandler"
      :class="isActive ? 'animationSVG' : 'left-[22px]'"
      class="w-[15px] h-[15px] absolute top-1/3"
    >
      <inlineSvg class="w-[15px] h-[15px] cursor-pointer" :src="search" />
    </button>
    <input
      @focus="onFocus"
      v-model="searchField"
      placeholder="Поиск по лотам"
      :class="isActive ? 'ml-[22px]' : 'ml-[52px]'"
      class="w-3/4 text-base font-normal outline-none duration-300"
      type="text"
    />
  </div>
</template>
<style scoped lang="scss">
.animationSVG {
  animation: movingin 0.5s forwards;
  width: 100%;
}

@keyframes movingin {
  from {
    transform: translateX(22px);
  }

  to {
    transform: translateX(calc(100% - 32px));
  }
}
</style>
