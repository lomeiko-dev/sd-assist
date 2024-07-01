<script setup lang="ts">
import { IPropsItemData } from "../types";

const props = defineProps<IPropsItemData>();
</script>
<template>
  <div class="flex tablet:flex-row flex-col tablet:items-center items-start tablet:gap-0 gap-2 justify-between py-[15px] border-b border-dashed border-b-primary/20">
    <p class="text-sm font-normal text-black/40">{{ props.name }}</p>
    <p class="text-sm font-bold text-black">{{ props.data }}</p>
  </div>
</template>
