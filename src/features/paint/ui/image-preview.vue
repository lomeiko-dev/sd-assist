<script setup lang="ts">
import { ref } from "vue";
import { IImage, image as Image } from "shared/ui/image";
import trash from "shared/assets/icons/trash.svg";
import pen from "shared/assets/icons/pen2.svg";
import inlineSvg from "vue-inline-svg";
import Dialog from "primevue/dialog";
import Paint from "./paint.vue";

interface IProps {
  image: IImage;
  width?: number;
  height?: number;
}

const props = defineProps<IProps>();
const emits = defineEmits(["onDelete", "onChange"]);

const isChanged = ref(false);
const isHover = ref(false);
</script>
<template>
  <div
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    class="relative cursor-pointer"
    :style="`width: ${props.width}px; height: ${props.height}px;`"
  >
    <Image :width="props.width" :height="props.height" :image="props.image" />
    <div @mouseenter="isHover = true" class="absolute top-[10px] right-[10px] flex flex-col gap-[5px]" v-if="isHover">
      <button
        @click="$emit('onDelete')"
        class="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white duration-300 hover:bg-white/70"
      >
        <inlineSvg :src="trash" />
      </button>
      <button
        @click="isChanged = true"
        class="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white duration-300 hover:bg-white/70"
      >
        <inlineSvg :src="pen" />
      </button>
    </div>
    <Dialog modal v-model:visible="isChanged">
      <template #container>
        <Paint @on-changed="(image) => emits('onChange', image)" :close-modal="() => isChanged = false" :image="props.image.src"/>
      </template>
    </Dialog>
  </div>
</template>
