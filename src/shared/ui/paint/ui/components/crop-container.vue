<script setup lang="ts">
import { ref } from "vue";
import { ICropManager } from "../../model/types";

interface IProps {
  managment: ICropManager;
}

const props = defineProps<IProps>()

const containerRef = ref<HTMLDivElement | undefined>(undefined);

const isResizing = ref(false);
const isDragging = ref(false);

const mouseDownResizingHandler = (e: any) => {
  e.stopPropagation();
  isResizing.value = true;
  props.managment.setStartPosition(e.clientX, e.clientY);
};

const mouseMoveResizingHandler = (e: any, type: "sw" | "se" | "nw" | "ne") => {
  e.stopPropagation();

  if (isResizing.value && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();
    props.managment.resizingContainer(rect.width, rect.height, rect.top, rect.left, e.clientX, e.clientY, type);
  }
};

const mouseUpResizingHandler = () => {
  isResizing.value = false;
};

const mouseDownDraggingHandler = (e: any) => {
  if (containerRef.value) {
    isDragging.value = true;
    props.managment.setStartPosition(
      e.clientX - containerRef.value.offsetLeft,
      e.clientY - containerRef.value.offsetTop
    );
  }
};

const mouseMoveDraggingHandler = (e: any) => {
  if (isDragging.value && containerRef.value) {
    props.managment.moveContainer(e.clientX, e.clientY);
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
    class="bg-black/30 absolute z-20"
    :style="props.managment.generateStyleContainer()"
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