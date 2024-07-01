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
  <div class="border-l-2 border-solid border-l-primary/70 pl-3">
    <p v-if="width < MINI_TABLET">Комментарий автора:</p>
    <p class="text-sm font-bold leading-9 text-primary/70">
      {{ props.comment === null ? "Комментарий отсуствует" : props.comment }}
    </p>
  </div>
</template>
