<script setup lang="ts">
import check from "shared/assets/icons/check.svg";
import inlineSvg from "vue-inline-svg";

interface IProps {
  index: number;
  title: string;
  isActive?: boolean;
  isPassed?: boolean;
  isStartNode?: boolean;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="flex flex-col">
    <div v-if="!props.isStartNode">
        <div v-if="props.isPassed" class="h-[50px] w-[1px] ml-[10px] bg-green-600">
        </div>
        <div v-else-if="props.isActive" class="h-[50px] w-[1px] ml-[10px] bg-primary">
        </div>
        <div v-else class="h-[50px] w-[1px] ml-[10px] bg-primary/20">
        </div>
    </div>
    <div class="flex flex-row gap-[9px] h-[22px]">
      <div
        :class="`${props.isActive ? 'border-primary text-primary' : 'border-primary/20 text-primary/20'} ${
          props.isPassed ? 'bg-green-600 border-green-600' : ''
        }`"
        class="flex items-center w-[22px] h-[22px] justify-center border border-solid rounded-full"
      >
        <p v-if="!props.isPassed">{{ props.index + 1 }}</p>
        <inlineSvg v-else :src="check" />
      </div>
      <div class="text-sm font-normal w-full max-w-[133px]">
        <p v-if="props.isPassed" class="text-green-600">{{ props.title }}</p>
        <p v-else-if="props.isActive" class="text-primary">{{ props.title }}</p>
        <p v-else class="text-primary/20">{{ props.title }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
