<script setup lang="ts">
import { useDropZone } from "@vueuse/core";
import { ref } from "vue";
import download from "shared/assets/img/illustrations/incut-download-icon.png";
import { watch } from "vue";

interface IProps {
  dataTypes: string[];
  title: string;
  subtitle: string;
  errorMessage?: string;
  accept: string;
  isAvailableContent?: boolean;
}

const props = defineProps<IProps>();
const emits = defineEmits(["getFiles"]);

const isError = ref(false);

watch(
  () => props.errorMessage,
  () => {
    isError.value = props.errorMessage !== undefined;
  }
);

const dropZoneRef = ref<HTMLDivElement>();
const fileInputRef = ref<HTMLInputElement>();

function onDrop(files: File[] | null) {
  if (files) emits("getFiles", files);
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: props.dataTypes,
});
</script>

<template>
  <div
    @click="fileInputRef?.click?.()"
    ref="dropZoneRef"
    :class="`${isOverDropZone ? 'bg-gray/20' : ''} ${props.isAvailableContent ? 'h-[86px]' : ''} ${
      isError ? 'border border-solid border-red-600' : ''
    }`"
    class="bg-white rounded-[5px] mini-tablet:h-[230px] h-[168px] flex items-center justify-center flex-col duration-300 cursor-pointer hover:bg-gray/20"
  >
    <div v-if="!isError">
      <div v-if="!isOverDropZone" class="text-center">
        <p class="text-base font-normal text-gray">{{ props.title }}</p>
        <p class="text-xs font-normal text-gray">{{ props.subtitle }}</p>
      </div>
      <img v-else class="duration-300" width="64px" :src="download" alt="" />
    </div>
    <div v-else>
      <p class="text-red-600">{{ props.errorMessage }}</p>
    </div>
  </div>
  <input
    :accept="props.accept"
    @change="onDrop(Array.from(fileInputRef?.files || []))"
    ref="fileInputRef"
    type="file"
    class="hidden"
  />
</template>
