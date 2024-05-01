<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "./components/file-uploader.vue";

const files = ref<File[]>([]);

const converFiles = (Files: File[]) => {
    Files.forEach(file => {
        files.value.push(file)
    })
};

</script>

<template>
  <div>
    <div v-if="files.length !== 0" class="flex flex-row flex-wrap gap-[5px] mb-[13px]">
      <div
        v-for="file in files"
        class="w-[230px] h-[230px] bg-white rounded-[10px] flex items-center justify-center flex-col text-center px-2"
      >
        <h3 class="text-sm font-normal text-gray">{{ file.name }}</h3>
        <h4 class="text-xs font-normal text-gray flex gap-[5px]">
          {{ Math.floor(file.size / 1024) }}
          <p class="text-red-300">кб</p>
        </h4>
      </div>
    </div>
    <FileUploader
      title="Перетащите PDF-документы, чтобы добавить их к лоту"
      subtitle="или нажмите, чтобы выбрать их на компьютере"
      accept="application/pdf, application/zip"
      @get-files="converFiles"
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
