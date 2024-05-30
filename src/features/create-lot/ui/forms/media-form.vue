<script setup lang="ts">
import { imageUploader, pdfUploader } from "shared/ui/input";
import { ref } from "vue";
import InputContainer from "../components/input-container.vue";
import { createLotStore } from "features/create-lot/model/store/create-lot-store";
import ImagePreview from "features/paint/ui/image-preview.vue";
import { fileViewer } from "shared/ui/file-viewer";

const isShowDocumentUploader = ref(false);
const store = createLotStore();

const addFile = (file: any, key: string) => {
  if (store.fields[key].data === null) {
    store.fields[key].data = [file];
  } else {
    store.fields[key].data.push(file);
  }
};
</script>
<template>
  <div class="flex flex-col gap-[13px]">
    <div>
      <h3 class="text-2xl font-normal">Фотографии</h3>
      <p class="text-sm font-normal text-gray w-full max-w-[731px] mt-[22px]">
        Разрешение загружаемых фото не должно превышать 6000x6000 пикселей, размер — 5 MB. Допустимые форматы фото:
        jpeg, bmp, png
      </p>
      <InputContainer key-name="images" is-validated>
        <imageUploader
          class="mt-[10px]"
          :error-message="store.checkError('images') ? 'Лот должен иметь как минимум 1 изображение' : undefined"
          @get-image="(image) => addFile(image, 'images')"
        >
          <template #default>
            <ImagePreview
              v-for="(image, index) in store.getProps('images')"
              @on-change="(image) => (store.getProps('images').data[index] = image.src)"
              @on-delete="store.getProps('images').splice(index, 1)"
              :image="{ src: image, rotateIndex: 0 }"
              :width="230"
              :height="230"
            />
          </template>
        </imageUploader>
      </InputContainer>
    </div>

    <div v-if="!isShowDocumentUploader" class="mt-[25px]">
      <button
        @click="isShowDocumentUploader = true"
        class="flex items-center justify-center rounded-[6px] border border-solid border-primary/50 w-[201px] h-[47px] text-base font-normal text-primary duration-300 hover:bg-primary hover:text-white"
      >
        Добавить документ
      </button>
    </div>

    <div class="mt-[20px]" v-if="isShowDocumentUploader">
      <h3 class="text-2xl font-normal">Документ к лоту</h3>
      <p class="text-sm font-normal text-gray mt-[22px]">
        Вы можете загрузить PDF-файл, размером до 100 MB, изображения из которого будут автоматически извлечены.
      </p>

      <InputContainer key-name="files">
        <pdfUploader @get-file="(file) => addFile(file, 'files' )" class="mt-[35px]">
          <template #default>
            <fileViewer v-for="(file, index) in store.getProps('files')" @on-delete="store.getProps('files').splice(index, 1)" :file="file"/>
          </template>
        </pdfUploader>
      </InputContainer>
    </div>
  </div>
</template>
