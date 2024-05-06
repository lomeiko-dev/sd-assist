<script setup lang="ts">
import { watch } from "vue";
import { ref } from "vue";

interface IProps {
  startWidth?: number;
  startHeight?: number;
  startX?: number;
  startY?: number;
  minWidth?: string;
  minHeight?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  minWidth: "20px",
  minHeight: "20px",
  startWidth: 100,
  startHeight: 100,
  startX: 0,
  startY: 0,
});

const containerRef = ref<HTMLDivElement | undefined>(undefined);

const isResizing = ref(false);
const isDragging = ref(false);

const x = ref(0);
const y = ref(0);

const width = ref(0);
const height = ref(0);

watch(props, () => {
  width.value = props.startWidth;
  height.value = props.startHeight;
  x.value = props.startX;
  y.value = props.startY;
});

const mouseDownResizingHandler = (e: any) => {
  e.stopPropagation();
  isResizing.value = true;
  x.value = e.clientX;
  y.value = e.clientY;
};

const mouseMoveResizingHandler = (e: any, type: "sw" | "se" | "nw" | "ne") => {
  e.stopPropagation();

  if (isResizing.value && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();

    switch (type) {
      case "sw":
        containerRef.value.style.width = rect.width + (x.value - e.clientX) + "px";
        containerRef.value.style.height = rect.height - (y.value - e.clientY) + "px";
        containerRef.value.style.left = rect.left - (x.value - e.clientX) + "px";
        break;
      case "se":
        containerRef.value.style.width = rect.width - (x.value - e.clientX) + "px";
        containerRef.value.style.height = rect.height - (y.value - e.clientY) + "px";
        break;
      case "nw":
        containerRef.value.style.width = rect.width + (x.value - e.clientX) + "px";
        containerRef.value.style.height = rect.height + (y.value - e.clientY) + "px";
        containerRef.value.style.top = rect.top - (y.value - e.clientY) + "px";
        containerRef.value.style.left = rect.left - (x.value - e.clientX) + "px";
        break;
      case "ne":
        containerRef.value.style.width = rect.width - (x.value - e.clientX) + "px";
        containerRef.value.style.height = rect.height + (y.value - e.clientY) + "px";
        containerRef.value.style.top = rect.top - (y.value - e.clientY) + "px";
        break;
      default:
        break;
    }

    x.value = e.clientX;
    y.value = e.clientY;
  }
};

const mouseUpResizingHandler = () => {
  isResizing.value = false;
};

const mouseDownDraggingHandler = (e: any) => {
  if (containerRef.value) {
    isDragging.value = true;
    x.value = e.clientX - containerRef.value.offsetLeft;
    y.value = e.clientY - containerRef.value.offsetTop;
  }
};

const mouseMoveDraggingHandler = (e: any) => {
  if (isDragging.value && containerRef.value) {
    containerRef.value.style.left = `${e.clientX - x.value}px`;
    containerRef.value.style.top = `${e.clientY - y.value}px`;
  }
};

const mouseUpDraggingHandler = () => {
  isDragging.value = false;
};
</script>
<template>
  <div
    @mousemove="mouseMoveDraggingHandler"
    @mousedown="mouseDownDraggingHandler"
    @mouseup="mouseUpDraggingHandler"
    class="bg-black/30 absolute top-0 left-0 z-20"
    :class="`w-[${props.startWidth}px] h-[${props.startHeight}px]`"
    ref="containerRef"
  >
    <div class="relative w-full h-full border-[4px] border-dashed border-blue-600 cursor-move">
      <button
        @mousedown="mouseDownResizingHandler"
        @mousemove="(e: any) => mouseMoveResizingHandler(e, 'nw')"
        @mouseup="mouseUpResizingHandler"
        class="absolute -top-[10px] -left-[10px] w-[20px] h-[20px] bg-blue-600 rounded-full cursor-se-resize duration-300 hover:scale-[2]"
      ></button>
      <button
        @mousedown="mouseDownResizingHandler"
        @mousemove="(e: any) => mouseMoveResizingHandler(e, 'ne')"
        @mouseup="mouseUpResizingHandler"
        class="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-blue-600 rounded-full cursor-ne-resize duration-300 hover:scale-[2]"
      ></button>
      <button
        @mousedown="mouseDownResizingHandler"
        @mousemove="(e: any) => mouseMoveResizingHandler(e, 'sw')"
        @mouseup="mouseUpResizingHandler"
        class="absolute -bottom-[10px] -left-[10px] w-[20px] h-[20px] bg-blue-600 rounded-full cursor-sw-resize duration-300 hover:scale-[2]"
      ></button>
      <button
        @mousedown="mouseDownResizingHandler"
        @mousemove="(e: any) => mouseMoveResizingHandler(e, 'se')"
        @mouseup="mouseUpResizingHandler"
        class="absolute -bottom-[10px] -right-[10px] w-[20px] h-[20px] bg-blue-600 rounded-full cursor-nw-resize duration-300 hover:scale-[2]"
      ></button>
    </div>
  </div>
</template>
<style lang="scss"></style>
