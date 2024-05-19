<script setup lang="ts">
import { getDataUrlByImageData } from "../../model/lib/helpers/getDataUrlByImageData";
import { IDrawToolsMethods, IHistoryManager, ITextManager } from "../../model/lib/types";

interface IProps {
  managment?: IHistoryManager;
  drawTools?: IDrawToolsMethods;
  textManagment?: ITextManager;
}

const props = defineProps<IProps>();

const saveHistory = () => {
  const canvas = props.drawTools?.canvas.value;
  const context = props.drawTools?.context.value;

  if (context && canvas) {
    const this_image_data = getDataUrlByImageData(
      context.getImageData(0, 0, canvas.width, canvas.height),
      canvas.width,
      canvas.height
    );

    if (
      JSON.stringify(props.textManagment?.texts.value) !==
        JSON.stringify(props.managment?.history[props.managment?.history.length - 1].texts) ||
      this_image_data.src !== props.managment?.history[props.managment.history.length - 1].imageData
    ) {
      props.managment?.save();
    }
  }
};
</script>
<template>
  <div @click="saveHistory">
    <slot></slot>
  </div>
</template>
