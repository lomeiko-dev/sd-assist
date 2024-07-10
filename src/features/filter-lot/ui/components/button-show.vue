<script setup lang="ts">
interface IProps {
  count: number;
}

const props = defineProps<IProps>();
const emits = defineEmits(["click"]);
</script>
<template lang="html">
  <button
    @click="$emit('click')"
    class="w-full border border-solid border-primary py-4 text-sm font-normal text-primary rounded-md duration-300 hover:bg-primary/50 hover:border-primary/50"
  >
    Показать {{ props.count }} авто
  </button>
</template>
