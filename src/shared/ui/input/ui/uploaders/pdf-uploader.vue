<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "../components/file-uploader.vue";
import { useWindowSize } from "@vueuse/core";

interface IProps {
  errorMessage?: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(['get-file'])
const files = ref<File[]>([]);

const {width} = useWindowSize()

const converFiles = (Files: File[]) => {
    Files.forEach(file => {
        files.value.push(file)
        emits('get-file', files.value)
    })
};

</script>

<template>
  <div>
    <div v-if="files.length !== 0" class="flex flex-row flex-wrap gap-[5px] mb-[13px]">
      <div
        v-for="file in files"
        class="mini-tablet:w-[230px] mini-tablet:h-[230px] w-[144px] h-[155px] bg-white rounded-[10px] flex items-center justify-center flex-col text-center px-2"
      >
        <h3 class="text-sm font-normal text-gray">{{ file.name }}</h3>
        <h4 class="text-xs font-normal text-gray flex gap-[5px]">
          {{ Math.floor(file.size / 1024) }}
          <p class="text-red-300">кб</p>
        </h4>
      </div>
    </div>
    <FileUploader
      :title="width < 640 ? 'Добавить документы' : 'Перетащите PDF-документы, чтобы добавить их к лоту'"
      :subtitle="width < 640 ? '' : 'или нажмите, чтобы выбрать их на компьютере'"
      accept="application/pdf, application/zip"
      @get-files="converFiles"
      :error-message="props.errorMessage"
      :data-types="[`application/pdf`, `application/zip`]"
      :is-available-content="files.length !== 0"
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
