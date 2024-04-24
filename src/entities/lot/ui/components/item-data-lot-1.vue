<script setup lang="ts">
import { IPropsItem } from "./types";

const props = defineProps<IPropsItem>();
</script>
<template>
  <div class="tablet:text-base text-sm font-normal flex flex-wrap flex-row justify-between">
    <p>{{ props.name }}:</p>
    <p v-if="props.data">{{ props.data }}</p>
    <slot v-else> </slot>
  </div>
</template>
