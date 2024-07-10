<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import crossIcon from "shared/assets/icons/cross.svg";
import { ref } from "vue";

const emits = defineEmits(["click"]);

const isHover = ref(false);
</script>
<template>
  <button
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @click="$emit('click')"
    class="flex flex-row items-center gap-3"
  >
    <inlineSvg :src="crossIcon" />
    <p
      :class="isHover ? 'border-primary text-primary' : 'border-primary/50 text-primary/50'"
      class="text-sm font-normal border-b border-solid duration-300"
    >
      Сбросить фильтр
    </p>
  </button>
</template>
