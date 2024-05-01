<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import { ref } from "vue";
import { watch } from "vue";

interface IProps {
  isFocused?: boolean;
  placeholder?: string;
  errorPlaceholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  errorPlaceholder: "",
});

const isError = ref(false);

watch(
  () => props.errorPlaceholder,
  () => {
    isError.value = props.errorPlaceholder !== "";
  }
);
</script>
<template>
  <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
    <slot></slot>
    <label :class="`${isError ? 'text-red-600' : ''} ${props.isFocused ? 'focused' : ''}`">{{
      isError ? props.errorPlaceholder : props.placeholder
    }}</label>
  </FloatLabel>
</template>
<style scoped lang="scss">
.focused {
  top: 0;
}
</style>
