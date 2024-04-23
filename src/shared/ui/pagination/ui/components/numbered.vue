<script setup lang="ts">
interface IProps {
  num: number;
  isSelected?: boolean;
}

const props = defineProps<IProps>();

</script>
<template>
  <p
    :class="props.isSelected ? 'bg-primary text-white' : ''"
    class="flex select-none items-center justify-center duration-300 w-[25px] h-[25px] rounded cursor-pointer hover:bg-primary/50 hover:text-white"
  >
    {{ props.num }}
  </p>
</template>