<script setup lang="ts">
import inlineSvg from "vue-inline-svg";

interface IProps {
  src: string;
  isActive?: boolean;
}

const props = defineProps<IProps>();
const emits = defineEmits(["click"]);
</script>
<template>
  <button
    @click="$emit('click')"
    class="relative w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white duration-300 hover:bg-white/70"
  >
    <div v-if="props.isActive" class="w-[10px] h-[10px] rounded-full bg-blue-600 absolute top-0 right-0"></div>
    <inline-svg :src="props.src"></inline-svg>
  </button>
</template>
<style lang="scss"></style>
