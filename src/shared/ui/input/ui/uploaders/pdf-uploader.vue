<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "../components/file-uploader.vue";
import { useWindowSize } from "@vueuse/core";

interface IProps {
  errorMessage?: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(["get-file"]);
const isAvailable = ref(true);
const { width } = useWindowSize();

const converFiles = (Files: File[]) => {
  isAvailable.value = false;
  Files.forEach((file) => {
    emits("get-file", file);
  });
};
</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap gap-[5px] mb-[13px]">
      <slot></slot>
    </div>
    <FileUploader
      :title="width < 640 ? 'Добавить документы' : 'Перетащите PDF-документы, чтобы добавить их к лоту'"
      :subtitle="width < 640 ? '' : 'или нажмите, чтобы выбрать их на компьютере'"
      accept="application/pdf, application/zip"
      @get-files="converFiles"
      :error-message="props.errorMessage"
      :data-types="[`application/pdf`, `application/zip`]"
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
