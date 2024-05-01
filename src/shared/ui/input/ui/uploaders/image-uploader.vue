<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "../components/file-uploader.vue";
import { useWindowSize } from "@vueuse/core";

const emits = defineEmits(['get-image'])
const images = ref<string[]>([]);

const {width} = useWindowSize()

const converFilesToImages = (Files: File[]) => {
  Files.forEach((file) => {
    images.value.push(URL.createObjectURL(file));
    emits("get-image", images.value);
  });
};
</script>

<template>
  <div>
    <div v-if="images.length !== 0" class="flex flex-row flex-wrap gap-[5px] mb-[13px]">
      <div
        v-for="image in images"
        class="img mini-tablet:w-[230px] mini-tablet:h-[230px] w-[144px] h-[155px] rounded-[10px]"
        :style="`background-image: url(${image})`"
      ></div>
    </div>
    <FileUploader
      :title="width < 640 ? 'Добавить фото' : 'Перетащите изображения, чтобы добавить их к лоту'"
      :subtitle="width < 640 ? '' : 'или нажмите, чтобы выбрать их на компьютере'"
      accept="image/jpeg, image/png"
      @get-files="converFilesToImages"
      :data-types="[`image/jpeg`, `image/png`, `image/`]"
      :is-available-content="images.length !== 0"
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
