<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "../components/file-uploader.vue";
import { useWindowSize } from "@vueuse/core";
import { convertToBase64 } from "shared/lib/utils/convertToBase64";
import { IImage } from "shared/ui/image";

interface IProps {
  errorMessage?: string;
}

const props = defineProps<IProps>();

const model = defineModel<IImage[]>()

const {width} = useWindowSize()
const isAvailable = ref(true);

const converFilesToImages = (Files: File[]) => {
  isAvailable.value = false;
  Files.forEach(async (file) => {
    if(model.value === null){
      model.value = [{src: await convertToBase64(file, "data:image/png;base64,"), rotateIndex: 0}]
    }
    else{
      model.value?.push({src: await convertToBase64(file, "data:image/png;base64,"), rotateIndex: 0})
    }
  });
};
</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap gap-[5px] mb-[13px]">
      <slot></slot>
    </div>
    <FileUploader
      :title="width < 640 ? 'Добавить фото' : 'Перетащите изображения, чтобы добавить их к лоту'"
      :subtitle="width < 640 ? '' : 'или нажмите, чтобы выбрать их на компьютере'"
      :error-message="props.errorMessage"
      accept="image/jpeg, image/png"
      @get-files="converFilesToImages"
      :data-types="[`image/jpeg`, `image/png`, `image/`]"
      :is-available-content="isAvailable"
    />
  </div>
</template>
<style scoped lang="scss">
.img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
