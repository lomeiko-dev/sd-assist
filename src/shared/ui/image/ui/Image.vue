<script setup lang="ts">
import { computed } from "vue";
import { IImage } from "../model/types";

interface IProps {
  image: IImage;
  width?: number;
  height?: number;
  sizeSign?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  sizeSign: "px"
});

const rotate = computed(() => {
  return 90 * (props.image.rotateIndex || 0);
});

</script>
<template>
    <div
      class="image rounded-[10px]"
      :style="`width: ${props.width}${props.sizeSign}; height: ${props.height}${props.sizeSign}; background-image: url(${props.image.src}); transform: rotate(${rotate}deg)`"
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
