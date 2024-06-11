<script setup lang="ts">
import { ref } from "vue";
import { IConfigField, generateForm, IFieldsManager } from "shared/ui/input";
import { mediaFormConfig_primary, mediaFormConfig_secondary } from "../../model/config/media-form-config";
import { ImagePreview } from "features/paint";
import { fileViewer } from "shared/ui/file-viewer";

interface IProps {
  managment: IFieldsManager;
}

const props = defineProps<IProps>();

const config_1 = ref<IConfigField[]>(mediaFormConfig_primary);
const config_2 = ref<IConfigField[]>(mediaFormConfig_secondary);

const isShowDocumentUploader = ref(false);
</script>
<template>
  <generateForm :manager="props.managment" :config="config_1">
    <template #images>
      <div class="mt-3 flex flex-wrap gap-[10px]">
        <ImagePreview
          v-for="(image, index) in props.managment.object['images'].data"
          @on-change="(image) => (props.managment.object['images'].data[index] = image.src)"
          @on-delete="props.managment.object['images'].data.splice(index, 1)"
          :image="{ src: image, rotateIndex: 0 }"
          :width="230"
          :height="230"
        />
      </div>
    </template>
  </generateForm>

  <div v-if="!isShowDocumentUploader" class="mt-[25px]">
    <button
      @click="isShowDocumentUploader = true"
      class="flex items-center justify-center rounded-[6px] border border-solid border-primary/50 w-[201px] h-[47px] text-base font-normal text-primary duration-300 hover:bg-primary hover:text-white"
    >
      Добавить документ
    </button>
  </div>
  <generateForm class="mt-10" :manager="props.managment" :config="config_2" v-if="isShowDocumentUploader">
    <template #files>
      <div class="mt-3 flex flex-wrap gap-[10px]">
        <fileViewer
          v-for="(file, index) in props.managment.object['files'].data"
          @on-delete="props.managment.object['files'].data.splice(index, 1)"
          :file="file"
        />
      </div>
    </template>
  </generateForm>
</template>
