<script setup lang="ts">
import { ref } from "vue";
import { ICropManager, enumTypeBackground, enumTypeDrow, type IPaintMethods } from "../model/types";
import { watch } from "vue";
import { drawTools } from "../model/lib/utils/draw-tools";
import { historyManager } from "../model/lib/utils/history-manager";
import { type IDrawToolsMethods, type IHistoryManagerMehods } from "../model/types";
import CropContainer from "./components/crop-container.vue";
import { onMounted } from "vue";
import textManagment from "./components/text-managment.vue";
import { textManager } from "../model/lib/utils/text-manager";
import { cropManager } from "../model/lib/utils/crop-manager";
import { drawAdaptiveImage } from "../model/lib/helpers/draw-adaptive-image";

interface IProps {
  background?: string;
  width: number;
  height: number;
  typeBackground?: enumTypeBackground;
  typeDrow?: enumTypeDrow;
  color?: string;
  size?: number;
  rotateIndex?: number;
  getControlMethods?: () => IPaintMethods;
}

const props = withDefaults(defineProps<IProps>(), {
  background: "#FFFFFF",
  typeBackground: enumTypeBackground.COLOR,
  typeDrow: enumTypeDrow.PEN,
  color: "#000000",
  size: 14,
  rotateIndex: 0,
});

const canvasRef = ref<HTMLCanvasElement | undefined>(undefined);
const tools = ref<IDrawToolsMethods>();
const history = ref<IHistoryManagerMehods>();
const cropControl = ref<ICropManager | null>(null);
const textControl = textManager();

const isDrawing = ref(false);
const rotate = ref(0);

onMounted(() => {
  rotate.value = 0 + 90 * props.rotateIndex;
});

onMounted(() => {});

watch(
  () => canvasRef.value,
  () => {
    if (canvasRef.value) {
      const context = canvasRef.value.getContext("2d", { willReadFrequently: true });

      tools.value = drawTools(context, {
        color: props.color,
        size: props.size,
        width: props.width,
        height: props.height,
      });

      cropControl.value = cropManager(context, canvasRef.value, {
        x: 25,
        y: 25,
        width: props.width - 50,
        height: props.height - 50,
      });

      history.value = historyManager(context, canvasRef.value, {
        width: props.width,
        height: props.height,
        textManager: textControl,
      });

      if (props.typeBackground === enumTypeBackground.IMAGE && context) {
        drawAdaptiveImage(props.background, context, props.width, props.height);
        history.value.save(props.background);
      }
    }
  }
);

const mouseDownHandler = (e: any) => {
  isDrawing.value = true;
  tools.value?.setCoord(e.offsetX, e.offsetY, true);
};

const mouseUpHandler = () => {
  isDrawing.value = false;
  history.value?.save();
};

const mouseMoveHandler = (e: any) => {
  if (isDrawing.value) {
    switch (props.typeDrow) {
      case enumTypeDrow.PEN:
        tools.value?.draw(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.LINE:
        tools.value?.drawLine(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.RECTANGLE:
        tools.value?.drawRect(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.CIRCLE:
        tools.value?.drawCircle(e.offsetX, e.offsetY);
        break;
      default:
        tools.value?.draw(e.offsetX, e.offsetY);
    }
  }
};
</script>
<template>
  <div>
    <CropContainer v-if="cropControl?.getShowContainer() && cropControl" :managment="cropControl" />
    <canvas
      ref="canvasRef"
      :width="props.width"
      :height="props.height"
      @mousedown="mouseDownHandler"
      @mouseup="mouseUpHandler"
      @mousemove="mouseMoveHandler"
      :style="`transform: rotate(${rotate}deg)`"
    >
    </canvas>
    <textManagment
      v-if="history"
      :history="history"
      :managment="textControl"
      :is-clicable="!isDrawing"
      class="absolute top-0 left-0 w-[1500px] h-[800px]"
    />
    <div class="flex flex-row gap-5">
      <button @click="history?.undo">Тест ундо</button>
      <button @click="() => {textControl?.addText(); history?.save()}">Тест создать текст</button>
      <button @click="cropControl?.toggleShowContainer">Тест crop</button>
      <button @click="cropControl?.crop(props.size)">обрезать</button>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
