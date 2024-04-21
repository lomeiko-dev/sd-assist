<script setup lang="ts">
interface IProps {
  isMobilePadding?: boolean;
}

const props = defineProps<IProps>()
</script>
<template>
  <div class="w-full max-w-[1200px] mx-auto" :class="props.isMobilePadding ? 'px-[10px]':''">
    <slot></slot>
  </div>
</template>
<style lang="scss"></style>
