<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";
import { CSSProperties } from "vue";
import inlineSvg from "vue-inline-svg";
import check from "shared/assets/icons/check.svg";

interface IProps {
  tooltip: string;
  styleSheet: CSSProperties;
  isActive?: boolean;
}


const props = defineProps<IProps>();
const isHovered = ref(false);

</script>
<template>
  <div class="relative">
    <div
      class="shadowed absolute -top-8 -left-6 rounded-[40px] px-3 py-[3px] opacity-0 duration-300"
      :class="isHovered ? 'opacity-100' : ''"
      :style="styleSheet"
    >
      <p class="text-sm font-normal">{{ props.tooltip }}</p>
    </div>
    <Button
      :style="props.styleSheet"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      class="w-7 h-7 rounded-full flex items-center justify-center"
    >
      <inline-svg v-if="props.isActive" :class="styleSheet.color === 'white' ? 'check-white' : 'check-dark'" :src="check" />
    </Button>
  </div>
</template>
<style lang="scss">
.shadowed {
  box-shadow: 0px 15px 20px 0px #0000002e;
}

.check-dark > path {
  stroke: black;
}

.check-white > path {
  stroke: white;
}
</style>
