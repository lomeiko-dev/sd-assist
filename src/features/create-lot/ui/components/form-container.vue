<script setup lang="ts">
interface IProps {
  padding?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  padding: "40px",
});
</script>

<template>
  <div :style="`padding: ${props.padding}`" class="bg-smoky-white rounded-[10px]">
    <slot></slot>
  </div>
</template>
