<script setup lang="ts">
interface IProps {
  save?: () => void;
  undo?: () => void;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="flex flex-row gap-[5px]">
    <button
      @click="props.save"
      class="bg-green w-[124px] h-[33px] text-white text-sm font-normal rounded-md duration-300 hover:bg-green/80"
    >
      Сохранить
    </button>
    <button
      @click="props.undo"
      class="bg-gray w-[180px] h-[33px] text-white text-sm font-normal rounded-md duration-300 hover:bg-gray/80"
    >
      Отменить действие
    </button>
  </div>
</template>
<style lang="scss"></style>
