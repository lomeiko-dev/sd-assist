<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "../components/file-uploader.vue";
import { useWindowSize } from "@vueuse/core";

interface IProps {
  errorMessage?: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(['get-image'])

const {width} = useWindowSize()
const isAvailable = ref(true);

const converFilesToImages = (Files: File[]) => {
  isAvailable.value = false;
  Files.forEach((file) => {
    emits("get-image", URL.createObjectURL(file));
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
