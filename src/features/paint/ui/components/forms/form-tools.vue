<script setup lang="ts">
import { ref, computed } from "vue";
import { enumTypeDrow } from "shared/ui/canvas";
import rotate from "shared/assets/icons/rotate.svg";
import clip from "shared/assets/icons/clip.svg";
import text from "shared/assets/icons/text.svg";
import pen from "shared/assets/icons/pen.svg";
import stylus from "shared/assets/icons/stylus.svg";
import circle from "shared/assets/icons/circle.svg";
import rectangle from "shared/assets/icons/rectangle.svg";
import ToolButton from "../tool-button.vue";

interface IProps {
  showCrop?: () => void;
  createText?: () => void;
}

const props = defineProps<IProps>();
const emits = defineEmits(["changeTool", "changeRotate"]);

const activeIndex = ref(0);
const rotateIndex = ref(0);

const selectTools = (index: number, func: () => any) => {
  activeIndex.value = index;
  func();
};

const changeRotate = computed(() => {
  rotateIndex.value++;

  if (rotateIndex.value === 4) {
    rotateIndex.value = 0;
  }

  return rotateIndex.value;
});
</script>
<template>
  <div class="flex flex-col gap-5">
    <ToolButton @click="selectTools(-1, () => $emit('changeRotate', changeRotate))" :src="rotate" />
    <ToolButton @click="selectTools(-1, () => props.showCrop?.())" :src="clip" />
    <ToolButton @click="selectTools(-1, () => props.createText?.())" :src="text" />
    <ToolButton
      :is-active="activeIndex === 0"
      @click="selectTools(0, () => $emit('changeTool', enumTypeDrow.PEN))"
      :src="pen"
    />
    <ToolButton
      :is-active="activeIndex === 1"
      @click="selectTools(1, () => $emit('changeTool', enumTypeDrow.LINE))"
      :src="stylus"
    />
    <ToolButton
      :is-active="activeIndex === 2"
      @click="selectTools(2, () => $emit('changeTool', enumTypeDrow.CIRCLE))"
      :src="circle"
    />
    <ToolButton
      :is-active="activeIndex === 3"
      @click="selectTools(3, () => $emit('changeTool', enumTypeDrow.RECTANGLE))"
      :src="rectangle"
    />
  </div>
</template>
