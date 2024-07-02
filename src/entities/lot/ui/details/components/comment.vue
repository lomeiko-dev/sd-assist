<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const MINI_TABLET = 640;

interface IProps {
  comment: string;
}

const props = defineProps<IProps>();
const {width} = useWindowSize()

</script>
<template>
  <div class="bg-smoky-white rounded-[10px] p-10">
    <p v-if="width < MINI_TABLET">Комментарий автора:</p>
    <p class="text-sm font-normal leading-[21px] text-black">
      {{ props.comment === null ? "Комментарий отсуствует" : props.comment }}
    </p>
  </div>
</template>
