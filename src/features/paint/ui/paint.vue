<script setup lang="ts">
import { Canvas, IPaintMethods, enumTypeBackground, enumTypeDrow } from "shared/ui/canvas";
import { ref } from "vue";
import FormSave from "./components/forms/form-save.vue";
import FormTools from "./components/forms/form-tools.vue";
import FormPen from "./components/forms/form-pen.vue";
import FormCrop from "./components/forms/form-crop.vue";

interface IProps {
  image: string;
  closeModal: () => void;
}

const props = defineProps<IProps>();
const emits = defineEmits(['onChanged']);

const methods = ref<IPaintMethods | undefined>(undefined);
const tool = ref<enumTypeDrow | null>(enumTypeDrow.PEN);
const color = ref("#000000");
const size = ref(5);
const rotate = ref(0);
const isHideUI = ref(false);
const isShowCrop = ref(false);

const toggleShowContainer = () => {
  methods.value?.showCropContainer();
  isShowCrop.value = !isShowCrop.value;
  isHideUI.value = !isHideUI.value;
};

const crop = () => {
  methods.value?.crop();
  isShowCrop.value = !isShowCrop.value;
  isHideUI.value = !isHideUI.value;
}

const save = () => {
  const result = methods.value?.save();
  if(result)
    emits('onChanged', result)
  props.closeModal();
}

</script>
<template>
  <div class="relative w-[980px] bg-black">
    <div
      class="absolute top-0 left-5 z-20 h-full flex items-center justify-center duration-300"
      :class="isHideUI ? 'opacity-20 left-[5px] pointer-events-none' : ''"
    >
      <FormTools
        @change-tool="(selected) => (tool = selected)"
        @change-rotate="(selected) => (rotate = selected)"
        :create-text="methods?.createNewText"
        :show-crop="toggleShowContainer"
      />
    </div>
    <div
      class="absolute top-[22px] right-[25px] z-20 duration-300"
      :class="isHideUI ? 'opacity-20 top-[5px] right-[5px] pointer-events-none' : ''"
    >
      <FormPen v-model:size="size" v-model:color="color" />
    </div>

    <Canvas
      @control-methods="(data: IPaintMethods) => (methods = data)"
      @mousedown="!isShowCrop ? (isHideUI = true) : null"
      @mouseup="!isShowCrop ? (isHideUI = false) : null"
      :width="980"
      :height="588"
      :type-drow="tool"
      :background="props.image"
      :type-background="enumTypeBackground.IMAGE"
      :color="color"
      :size="size"
      :rotate-index="rotate"
    />
    <div
      class="absolute bottom-[22px] right-[25px] duration-300"
      :class="isHideUI ? 'opacity-20 bottom-[5px] right-[5px] pointer-events-none' : ''"
    >
      <FormSave :save="save" :undo="methods?.undo" />
    </div>
  </div>
  <div class="flex justify-end w-[980px]" v-if="isShowCrop">
    <FormCrop @crop="crop" @undo="toggleShowContainer"/>
  </div>
</template>
