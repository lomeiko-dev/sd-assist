<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import cross from "shared/assets/icons/trash.svg";
import { ref } from "vue";

interface IProps {
  file: File;
}

const props = defineProps<IProps>();
const emits = defineEmits(['onDelete']);

const isHover = ref(false);
</script>
<template>
  <div
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    class="mini-tablet:w-[230px] mini-tablet:h-[230px] w-[144px] h-[155px] bg-white rounded-[10px] flex items-center justify-center flex-col text-center px-2 duration-300 hover:bg-gray/20"
  >
    <div v-if="isHover">
      <button @click="$emit('onDelete')">
        <inlineSvg class="w-[48px] h-[48px]" :src="cross" />
      </button>
    </div>
    <div class="flex flex-col items-center" v-else>
      <h3 class="text-sm font-normal text-gray">{{ props.file.name }}</h3>
      <h4 class="text-xs font-normal text-gray flex gap-[5px]">
        {{ Math.floor(props.file.size / 1024) }}
        <p class="text-red-300">кб</p>
      </h4>
    </div>
  </div>
</template>
