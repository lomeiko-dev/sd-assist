<script setup lang="ts">
interface IProps {
  comment: string;
}

const props = defineProps<IProps>();

</script>
<template>
  <div class="border-l-2 border-solid border-l-primary/70 pl-3">
    <p class="text-sm font-bold leading-9 text-primary/70">
      {{ props.comment === null ? "Комментарий отсуствует" : props.comment }}
    </p>
  </div>
</template>
