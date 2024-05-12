<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { drawTools } from "../model/lib/utils/draw-tools";
import { historyManager } from "../model/lib/utils/history-manager";
import { textManager } from "../model/lib/utils/text-manager";
import { cropManager } from "../model/lib/utils/crop-manager";
import CropContainer from "./components/crop-container.vue";
import textManagment from "./components/text-managment.vue";
import PaintManagment from "./components/paint-managment.vue";
import {
  ICropManager,
  enumTypeBackground,
  enumTypeDrow,
  type IPaintMethods,
  type IHistoryManagerMehods,
} from "../model/types";
import HistoryManagment from "./components/history-managment.vue";

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

const tools = drawTools({ color: props.color, size: props.size });
const textControl = textManager();
const cropControl = ref<ICropManager>();
const history = ref<IHistoryManagerMehods>();

watch(
  () => tools.context.value,
  () => {
    if (tools.context.value && tools.canvas.value) {
      cropControl.value = cropManager(tools.context.value, {
        x: 0,
        y: 0,
        width: props.width,
        height: props.height,
      });

      history.value = historyManager(tools.context.value, textControl);
      history.value.save(props.background);
    }
  }
);
</script>
<template>
  <div class="relative overflow-hidden" :class="`w-[${props.width}px] h-[${props.height}px]`">
    <HistoryManagment :text-managment="textControl" :managment="history">
      <CropContainer v-if="cropControl?.getShowContainer() && cropControl" :managment="cropControl" />
      <PaintManagment
        :rotate-index="props.rotateIndex"
        :type-background="props.typeBackground"
        :background="props.background"
        :tools="tools"
        :width="props.width"
        :height="props.height"
        :type-drow="props.typeDrow"
      />
      <textManagment :managment="textControl" :is-clicable="!tools.isDrawing.value" />
    </HistoryManagment>

  </div>
  <div class="flex flex-row gap-5">
    <button @click="history?.undo">Тест ундо</button>
    <button
      @click="
        () => {
          textControl?.addText();
          history?.save();
        }
      "
    >
      Тест создать текст
    </button>
    <button @click="cropControl?.toggleShowContainer">Тест crop</button>
    <button @click="cropControl?.crop(props.size)">обрезать</button>
  </div>
</template>
