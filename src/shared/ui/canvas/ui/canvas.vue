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
import HistoryManagment from "./components/history-managment.vue";
import { enumTypeBackground, enumTypeDrow, type IPaintMethods } from "../model/types";
import type { ICropManager, IHistoryManager } from "../model/lib/types";

interface IProps {
  background?: string;
  width: number;
  height: number;
  typeBackground?: enumTypeBackground;
  typeDrow?: enumTypeDrow;
  color?: string;
  size?: number;
  rotateIndex?: number;
  getControlMethods?: (data: string) => void;
}

const emits = defineEmits(["controlMethods"]);

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
const history = ref<IHistoryManager>();

watch(
  () => [props.color, props.size],
  () => {
    tools.setColor(props.color);
    tools.setSize(props.size);
  }
);

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

      const methods: IPaintMethods = {
        showCropContainer: cropControl.value.toggleShowContainer,
        crop: () => {
          cropControl.value?.crop(props.size);
        },
        createNewText: () => {
          textControl?.addText();
          history.value?.save();
        },
        undo: history.value?.undo,
        save: () => {
          if (tools.context.value) {
            textControl.drawAllTexts(tools.context.value, 16, 24);
            const src = tools.getPicture()?.src;
            if (src) return { src, rotateIndex: props.rotateIndex };
          }
        },
      };

      emits("controlMethods", methods);
    }
  }
);
</script>
<template>
  <div class="relative overflow-hidden" :class="`w-[${props.width}px] h-[${props.height}px]`">
    <HistoryManagment :draw-tools="tools" :text-managment="textControl" :managment="history">
      <PaintManagment
        :rotate-index="props.rotateIndex"
        :type-background="props.typeBackground"
        :background="props.background"
        :tools="tools"
        :width="props.width"
        :height="props.height"
        :type-drow="props.typeDrow"
      />
      <CropContainer v-if="cropControl?.getShowContainer()" :managment="cropControl" />
      <textManagment :managment="textControl" :is-clicable="!tools.isDrawing.value" />
    </HistoryManagment>
  </div>
</template>
