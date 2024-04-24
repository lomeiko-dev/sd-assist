<script setup lang="ts">
interface IProps {
  isMobilePadding?: boolean;
}

const props = defineProps<IProps>()
</script>
<template>
  <div class="w-full mx-auto" :class="props.isMobilePadding ? 'px-[30px] max-w-[1260px]':'max-w-[1200px]'">
    <slot></slot>
  </div>
</template>