<script setup lang="ts">
import { ref } from "vue";
import { IText } from "../../model/types";
import { onMounted } from "vue";

import OverlayPanel from "primevue/overlaypanel";
import TextForm from "./other/text-form.vue";

import inlineSvg from "vue-inline-svg";
import deleted from "shared/assets/icons/delete.svg";
import pen from "shared/assets/icons/pen.svg";
import check from "shared/assets/icons/check.svg";
import options from "shared/assets/icons/options.svg";

interface IProps {
  data?: IText[];
  isClicable?: boolean;
}

const props = defineProps<IProps>();

const texts = ref<IText[]>([]);
const overlayPanelRef = ref();
const textRef = ref<HTMLDivElement[] | undefined>(undefined);

const isMoving = ref(false);
const activeIndex = ref<number | null>(null);
const isChanged = ref(false);

const x = ref(0);
const y = ref(0);

const toggleSettings = (e: any) => {
  overlayPanelRef.value[0].toggle(e);
};

onMounted(() => {
  if (props.data) {
    texts.value = props.data;
  }
});

const mouseDownHandler = (e: any, index: number) => {
  isMoving.value = true;

  if (textRef.value) {
    x.value = e.clientX - textRef.value[index].offsetLeft;
    y.value = e.clientY - textRef.value[index].offsetTop;
  }
};

const mouseMoveHandler = (e: any, index: number) => {
  if (isMoving.value && textRef.value) {
    texts.value[index].x = e.clientX - x.value;
    texts.value[index].y = e.clientY - y.value;
  }
};

const mouseUpHandler = () => {
  isMoving.value = false;
};
</script>
<template>
  <div
    v-for="(item, index) in texts"
    ref="textRef"
    @mousedown="(e: any) => mouseDownHandler(e, index)"
    @mousemove="(e: any) => mouseMoveHandler(e, index)"
    @mouseup="mouseUpHandler"
    @mouseenter="activeIndex = index"
    @mouseleave="activeIndex = null"
    class="absolute select-none p-3 cursor-move border-[3px] border-solid border-transparent"
    :class="`${activeIndex === index ? 'border border-solid border-blue-500' : ''} ${
      !isClicable ? 'pointer-events-none' : ''
    } ${activeIndex !== index && activeIndex !== null ? 'pointer-events-none' : ''}`"
    :style="`left: ${item.x}px; top: ${item.y}px; color: ${item.colorHex}; font-size: ${item.fontSize}px; font-weight: ${item.fontWeight}`"
  >
    <p v-if="!isChanged">{{ item.title }}</p>
    <input
      @input="(e: any) => texts[index].title = e.target.value"
      v-else
      class="bg-transparent select-none border-none"
      :value="item.title"
      type="text"
    />

    <div v-if="activeIndex === index">
      <button
        @click="isChanged = !isChanged"
        class="w-[24px] h-[24px] bg-blue-600 absolute -top-3 -right-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[16px] h-[16px]" :src="isChanged ? check : pen" />
      </button>
      <button
        @click="texts.splice(index, 1)"
        class="w-[24px] h-[24px] bg-blue-600 absolute -bottom-3 -right-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[18px] h-[18px]" :src="deleted" />
      </button>
      <button
        @click="(e: any) => toggleSettings(e)"
        class="w-[24px] h-[24px] bg-blue-600 absolute -bottom-3 -left-3 flex items-center justify-center duration-300 hover:bg-blue-800"
      >
        <inline-svg class="text-white w-[18px] h-[18px]" :src="options" />
      </button>
    </div>

    <OverlayPanel @mouseenter="activeIndex = index" @mouseleave="activeIndex = null" ref="overlayPanelRef">
      <TextForm :text="texts[index]" />
    </OverlayPanel>
  </div>
</template>
