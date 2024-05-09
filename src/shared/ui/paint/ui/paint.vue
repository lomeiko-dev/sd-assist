<script setup lang="ts">
import { ref } from "vue";
import { enumTypeBackground, enumTypeDrow, type IPaintMethods } from "../model/types";
import { watch } from "vue";
import { drawTools } from "../model/lib/utils/draw-tools";
import { historyManager } from "../model/lib/utils/history-manager";
import {
  type IDrawToolsMethods,
  type IHistoryManagerMehods,
} from "../model/types";
import CropContainer from "./components/crop-container.vue";
import { onMounted } from "vue";
import textManagment from './components/text-managment.vue' 
import {textManager} from '../model/lib/utils/text-manager'


interface IProps {
  background?: string;
  width: number;
  height: number;
  typeBackground?: enumTypeBackground;
  typeDrow?: enumTypeDrow;
  color?: string;
  size?: number;
  rotateIndex?: number;
  getControlMethods?: () => IPaintMethods
}

const props = withDefaults(defineProps<IProps>(), {
  background: "#FFFFFF",
  typeBackground: enumTypeBackground.COLOR,
  typeDrow: enumTypeDrow.PEN,
  color: "#000000",
  size: 32,
  rotateIndex: 0,
});

const canvasRef = ref<HTMLCanvasElement | undefined>(undefined);
const tools = ref<IDrawToolsMethods>();
const history = ref<IHistoryManagerMehods>();
const textControl = textManager()

const isDrawing = ref(false);
const rotate = ref(0);

onMounted(() => {
  rotate.value = 0 + 90 * props.rotateIndex;
});

onMounted(() => {
  
})

watch(
  () => canvasRef.value,
  () => {
    if (canvasRef.value) {
      const context = canvasRef.value.getContext("2d");
      tools.value = drawTools(context, {
        color: props.color,
        size: props.size,
        width: props.width,
        height: props.height,
      });

      if (props.typeBackground === enumTypeBackground.IMAGE) {
        tools.value.loadImage(props.background, Number(props.width), Number(props.height));
      }

      history.value = historyManager(context, { width: props.width, height: props.height });
      console.log('gggg')
    }
  }
);

const mouseDownHandler = (e: any) => {
  isDrawing.value = true;
  tools.value?.setCoord(e.offsetX, e.offsetY);
  tools.value?.snapshoting(0, 0, Number(props.width), Number(props.height));
};

const mouseUpHandler = () => {
  isDrawing.value = false;
  tools.value?.resetCoord();
  history.value?.save();
};

const mouseMoveHandler = (e: any) => {
  if (isDrawing.value) {
    switch(props.typeDrow){
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
          tools.value?.draw(e.offsetX, e.offsetY)
    }
  }
};
</script>
<template>
  <div>
    <!-- <CropContainer :start-width="props.width" :start-height="props.height" /> -->
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
      :managment="textControl"
      :is-clicable="!isDrawing"
      class="absolute top-0 left-0 w-[1500px] h-[800px]"
    />
    <button @click="history?.undo">Тест ундо</button>
    <button @click="textControl?.addText">Тест создать текст</button>
  </div>
</template>
<style scoped lang="scss"></style>
