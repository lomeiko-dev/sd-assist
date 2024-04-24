<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import arrow_right from "shared/assets/icons/arrow-right.svg";

interface IProps {
    to: string;
}

const props = defineProps<IProps>()

</script>
<template>
  <RouterLink class="flex flex-row items-center gap-[10px] duration-300 hover:gap-[15px]" :to="props.to">
    <p class="text-sm font-normal text-primary">Смотреть все предложения</p>
    <inlineSvg :src="arrow_right" />
  </RouterLink>
</template>
<style lang="scss"></style>
