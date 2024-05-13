<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";
import { drawAdaptiveImage } from "../../model/lib/helpers/draw-adaptive-image";
import { enumTypeBackground, enumTypeDrow } from "../../model/types";
import { IDrawToolsMethods } from "../../model/lib/types";

interface IProps {
  background?: string;
  typeBackground?: enumTypeBackground;
  tools?: IDrawToolsMethods;
  typeDrow: enumTypeDrow;
  width: number;
  height: number;
  rotateIndex?: number;
}

const props = defineProps<IProps>();

const canvasRef = ref<HTMLCanvasElement | null>(null);
const rotate = ref(0);

watch(
  () => canvasRef.value,
  () => {
    if (canvasRef.value) {
      props.tools?.init(canvasRef.value);

      if (props.typeBackground === enumTypeBackground.IMAGE && props.tools?.context.value) {
        drawAdaptiveImage(props.background || "", props.tools?.context.value, props.width, props.height);
      }
    }
  }
);

onMounted(() => {
  rotate.value = 0 + 90 * (props.rotateIndex || 0);
});

const mouseDownHandler = (e: any) => {
  props.tools?.toggleDrawing()
  props.tools?.setCoord(e.offsetX, e.offsetY, true);
};

const mouseUpHandler = () => {
    props.tools?.toggleDrawing()
};

const mouseMoveHandler = (e: any) => {
  if (props.tools?.isDrawing.value) {
    switch (props.typeDrow) {
      case enumTypeDrow.PEN:
        props.tools?.draw(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.LINE:
        props.tools?.drawLine(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.RECTANGLE:
        props.tools?.drawRect(e.offsetX, e.offsetY);
        break;
      case enumTypeDrow.CIRCLE:
        props.tools?.drawCircle(e.offsetX, e.offsetY);
        break;
      default:
        props.tools?.draw(e.offsetX, e.offsetY);
    }
  }
};
</script>
<template>
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
</template>
