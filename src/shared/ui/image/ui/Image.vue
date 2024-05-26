<script setup lang="ts">
import { computed } from "vue";
import { IImage } from "../model/types";

interface IProps {
  image: IImage;
  width?: number;
  height?: number;
}

const props = defineProps<IProps>();

const rotate = computed(() => {
  return 90 * (props.image.rotateIndex || 0);
});

</script>
<template>
    <div
      class="image rounded-[10px]"
      :style="`width: ${props.width}px; height: ${props.height}px; background-image: url(${props.image.src}); transform: rotate(${rotate}deg)`"
    ></div>
</template>
<style scoped lang="scss">
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
}
</style>
