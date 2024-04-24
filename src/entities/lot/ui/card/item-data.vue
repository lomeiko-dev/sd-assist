<script setup lang="ts">
import { IPropsItemData } from "../types";

const props = defineProps<IPropsItemData>();
</script>
<template>
  <div class="tablet:text-base text-sm font-normal flex flex-wrap flex-row justify-between">
    <p>{{ props.name }}:</p>
    <p v-if="props.data">{{ props.data }}</p>
    <slot v-else> </slot>
  </div>
</template>
