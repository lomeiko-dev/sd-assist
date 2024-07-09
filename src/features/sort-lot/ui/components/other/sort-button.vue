<script setup lang="ts">
interface IProps {
  name: string;
  isActive: boolean;
}

const props = defineProps<IProps>();
const emits = defineEmits(["click"]);
</script>
<template>
  <button
    @click="$emit('click')"
    :class="props.isActive ? 'text-primary' : 'text-primary/50 hover:text-primary/70'"
    class="text-sm font-bold duration-300"
  >
    {{ props.name }}
  </button>
</template>
