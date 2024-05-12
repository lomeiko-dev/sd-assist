<script setup lang="ts">
import { ref } from "vue";
import { type ITextManager } from "../../model/types";

import OverlayPanel from "primevue/overlaypanel";
import TextForm from "./other/text-form.vue";

import inlineSvg from "vue-inline-svg";
import deleted from "shared/assets/icons/delete.svg";
import pen from "shared/assets/icons/pen.svg";
import check from "shared/assets/icons/check.svg";
import options from "shared/assets/icons/options.svg";

interface IProps {
  isClicable?: boolean;
  managment: ITextManager;
}

const props = defineProps<IProps>();

const overlayPanelRef = ref<any & { index: number }>();
const textRef = ref<HTMLDivElement[] | undefined>(undefined);
const isMoving = ref(false);

const toggleSettings = (e: any, index: number) => {
  overlayPanelRef.value[0].toggle(e);
  overlayPanelRef.value[0].index = index;
};

const toggleFormChanged = (index: number) => {
  props.managment.setChangedIndex(props.managment.isChanged.value ? null : index);
};

const mouseDownHandler = (e: any, index: number) => {
  isMoving.value = true;

  if (textRef.value) {
    props.managment.setStartPosition(
      e.clientX - textRef.value[index].offsetLeft,
      e.clientY - textRef.value[index].offsetTop
    );
  }
};

const mouseMoveHandler = (e: any) => {
  if (isMoving.value) props.managment.movingText(e.clientX, e.clientY);
};

const mouseUpHandler = () => {
  isMoving.value = false;
};
</script>
<template>
  <div
    v-for="(item, index) in props.managment.texts.value"
    ref="textRef"
    @mousedown="(e: any) => mouseDownHandler(e, index)"
    @mousemove="mouseMoveHandler"
    @mouseup="mouseUpHandler"
    @mouseenter="props.managment.setSelectedText(index)"
    @mouseleave="props.managment.setSelectedText(null)"
    class="absolute select-none p-3 cursor-move border-[3px] border-solid"
    :class="`${
      props.managment.selectIndex.value === index ? 'border border-solid border-blue-500' : 'border-transparent'
    }
    ${
      (props.managment.selectIndex.value !== index && props.managment.selectIndex.value !== null) || !props.isClicable
        ? 'pointer-events-none'
        : ''
    }`"
    :style="props.managment.generateStyleText(index)"
  >
    <p v-if="props.managment.changedIndex.value === null">{{ item.title }}</p>
    <input v-else v-model="item.title" class="bg-transparent select-none border-none" type="text" />

    <OverlayPanel
      show-close-icon
      @mouseenter="props.managment.setSelectedText(overlayPanelRef[0].index)"
      @mouseleave="props.managment.setSelectedText(null)"
      ref="overlayPanelRef"
    >
      <TextForm :text="props.managment.texts.value[overlayPanelRef[0].index]" />
    </OverlayPanel>

    <div v-if="props.managment.selectIndex.value === index">
      <button
        @click="toggleFormChanged(index)"
        class="w-[24px] h-[24px] bg-blue-600 absolute -top-3 -right-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[16px] h-[16px]" :src="props.managment.isChanged.value ? check : pen" />
      </button>
      <button
        @click="props.managment.removeText"
        class="w-[24px] h-[24px] bg-blue-600 absolute -bottom-3 -right-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[18px] h-[18px]" :src="deleted" />
      </button>
      <button
        @click="(e: any) => toggleSettings(e, index)"
        class="w-[24px] h-[24px] bg-blue-600 absolute -bottom-3 -left-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[18px] h-[18px]" :src="options" />
      </button>
    </div>
  </div>
</template>
