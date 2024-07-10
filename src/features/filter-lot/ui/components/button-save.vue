<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import searchIcon from "shared/assets/icons/search.svg";

const emits = defineEmits(["click"]);
</script>
<template>
  <button @click="$emit('click')" class="flex flex-row items-center gap-3">
    <inlineSvg :src="searchIcon" />
    <p class="text-primary text-sm font-normal border-b border-solid border-b-primary duration-300 hover:text-primary/50 hover:border-b-primary/50">Сохранить поиск</p>
  </button>
</template>
