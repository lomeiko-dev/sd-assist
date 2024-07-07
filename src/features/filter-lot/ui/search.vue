<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import search from "shared/assets/icons/search.svg";

</script>
<template>
  <div
    class="tablet:flex items-center hidden h-[47px] w-full sxga:max-w-[280px] duration-700 rounded-md border border-solid border-primary/20 hover:border-primary"
  >
    <inlineSvg class="w-[15px] h-[15px] ml-[22px] mr-[15px]" :src="search" />
    <input placeholder="Поиск по лотам" class="text-base font-normal outline-none" type="text" />
  </div>
</template>
