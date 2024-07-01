<script setup lang="ts">
import { IPropsItemData } from "../types";

const props = defineProps<IPropsItemData>();
</script>
<template>
  <div class="flex flex-row items-start gap-[5px]">
    <p class="text-sm font-normal text-gray-500 gap-[4px] leading-[16px] mt-[2px]">{{ $props.name }}:</p>
    <h4 class="text-sm font-semibold text-black">{{ props.data }}</h4>
  </div>
</template>
